<template>
  <v-col cols="12" md="6" class="DataCard">
    <cities-bar-chart
      :title="$t('市町村毎の陽性患者数')"
      :title-id="'patietns-and-cities'"
      :chart-data="citiesGraph"
      :date="date"
      :unit="$t('人')"
      :info="$t('累計値')"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/hassei.html'"
      :source="$t('参考元データ')"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import CitiesBarChart from '@/components/CitiesBarChart.vue'

export default {
  components: {
    CitiesBarChart
  },
  data () {
    return {
      date: String,
      citiesGraph: [],
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 10,
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.date = Data.cities.date
    citiesGraph = Data.cities.data
    //this.renderChart(this.data, this.options)
  }
}
</script>
