<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <doughnut-chart
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOption"
      :height="240"
      :plugins="[labelplugin]"
    />
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
    <template v-slot:button>
      <p :class="$style.note">
        {{ '（注）総病床数 326床 = 医療病床 151床 + 軽症者等宿泊施設 175床' }}
      </p>
    </template>
    <template v-slot:footer>
      <open-data-link :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/documents/200416kaikena.pdf'" label="新型コロナウイルスに係る入院体制 - 4月16日知事記者会見資料" />
    </template>
  </data-view>
</template>

<script>
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'

export default {
  components: { DataView, DataViewBasicInfoPanel, OpenDataLink },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartId: {
      type: String,
      required: false,
      default: 'doughnut-chart'
    },
    chartData: {
      type: Array,
      required: false,
      default: () => []
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    unit: {
      type: String,
      required: false,
      default: ''
    },
    info: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    displayInfo() {
      if (this.isNotLoaded()) {
        return {
          lText: '',
          sText: '',
          unit: ''
        }
      }

      const chartData = this.chartData[this.chartData.length - 1]
      const total = chartData.cumulative
      const remaining = chartData.transition
      const patients = total - remaining
      return {
        lText: patients + '/' + total,
        sText: this.info,
        unit: this.unit
      }
    },
    displayData() {
      if (this.isNotLoaded()) {
        return {
          labels: [''],
          datasets: [
            {
              label: '',
              data: '',
              backgroundColor: '',
              borderWidth: 0
            }
          ]
        }
      }

      const colorArray = ['#00B849', '#D9D9D9']
      return {
        labels: this.chartData.map(d => {
          return this.$t(d.label)
        }),
        datasets: [
          {
            label: this.chartData.map(d => {
              return this.$t(d.label)
            }),
            data: this.chartData.map(d => {
              return d.transition
            }),
            backgroundColor: this.chartData.map((_, index) => {
              return colorArray[index]
            }),
            borderWidth: 0
          }
        ]
      }
    },
    displayOption() {
      if (this.isNotLoaded()) {
        return {}
      }

      const unitBed = this.unit
      const unitPerson = this.$t('人')
      const label = this.$t('病床数')
      const chartData = this.chartData
      return {
        tooltips: {
          displayColors: false,
          callbacks: {
            label(tooltipItem) {
              const index = tooltipItem.index
              const numerator = chartData[index].transition
              const numeratorUnit = index === 1 ? unitBed : unitPerson
              const denominator =
                chartData[0].transition + chartData[1].transition
              const denominatorLabel = label
              return `${numerator} ${numeratorUnit} (${denominatorLabel}: ${denominator}${unitBed})`
            },
            title(tooltipItem, data) {
              return data.labels[tooltipItem[0].index]
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'right'
        }
      }
    },
    labelplugin() {
      return {
        afterDatasetsDraw: function (chart, easing) {
          var ctx = chart.ctx;
          let per = 0;  // 表示用の数値
          let padding = 8

          chart.data.datasets.forEach((dataset, i) => {
            let dataSum = 0
            dataset.data.forEach((element) => {
              dataSum += element
            })

            let meta = chart.getDatasetMeta(i)
            if (!meta.hidden) {
              meta.data.forEach(function (element, index) {
                // フォントの設定
                let fontSize = 12
                let fontStyle = 'normal'
                let fontFamily = 'Helvetica Neue'
                ctx.fillStyle = '#666'
                // 設定を適用
                ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily)
                let labelString = dataset.label[index]
                // positionの設定
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                let position = element.tooltipPosition()
                //ctx.fillText(labelString, position.x, position.y - (fontSize / 2))  // データの百分率

                // 数値部分はフォントサイズ変更
                fontSize = 16
                ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily)
                let dataString = dataset.data[index]
                if (index == 0) {
                  //dataString += '人'
                  per = Math.round((dataset.data[index] / dataSum) * 100)
                } else {
                  //dataString += '床'
                }
                //ctx.fillText(dataString, position.x, position.y + (fontSize / 2))  // データの百分率
                //ctx.fillText(dataString, position.x, position.y)  // データの百分率
              })
            }
          })

          // 使用率のラベル
          let fontSize = 16;
          let fontStyle = 'normal';
          let fontFamily = "Helvetica Neue";
          ctx.fillStyle = '#666';
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('使用率', chart.width / 2 - 60, (chart.height - fontSize) / 2 - padding);

          // 使用率の数値
          fontSize = 32;
          if (per < 50) {
            ctx.fillStyle = '#666';
          } else if (per >= 50 && per < 80) {
            ctx.fillStyle = '#F6AA00';
          } else if (per >= 80) {
            ctx.fillStyle = '#FF4B00';
          } else {
            ctx.fillStyle = '#666';
          }
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
          ctx.fillText(per + '%', chart.width / 2 - 60, (chart.height + fontSize) / 2 - padding);
        }
      }
    }
  },
  methods: {
    /**
     * APIでデータを取得する前ならtrue
     */
    isNotLoaded() {
      return this.chartData.length === 0
    }
  }
}
</script>

<style lang="scss" module>
.Graph-Desc {
  margin: 10px 0;
  font-size: 12px;
  color: $gray-3;
}
.link {
  text-decoration: none;
}
ul.notes {
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 0 !important;
  font-size: 12px;
  color: $gray-3;

  > li {
    list-style-type: none;
  }
}

.note {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>
