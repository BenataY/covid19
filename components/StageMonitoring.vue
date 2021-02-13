<template>
  <v-card class="DataLabel" :loading="loading">
    <div class="DataLabel-Inner">
      <div class="DataLabel-Header">
        <h3
          class="DataLabel-Title"
          :class="!!$slots.infoPanel ? 'with-infoPanel' : ''"
        >
          {{ title }}
        </h3>
      </div>
      <table class="DataLabel-Table">
        <thead>
          <tr>
            <td rowspan="2" colspan="3">
              項目
            </td>
            <td colspan="4">
              Stage
            </td>
            <td rowspan="2">
              {{ formattedDateMD(updateDate) }}<br />の<br v-if="smallSize" />状況
            </td>
          </tr>
          <tr>
            <td class="stage4">
              4
            </td>
            <td class="stage3">
              3
            </td>
            <td class="stage2">
              2
            </td>
            <td class="stage1">
              1
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="rowTitleSub" rowspan="2">
              県内<br />医療<br />体制
            </td>
            <td class="rowTitleNumber">
              ①
            </td>
            <td class="rowTitle">
              病床稼働数
            </td>
            <td class="rowItem" :class="{'s4c': (datas.beds.stage == 4)}">
              287<span class="unit">床</span><br v-if="smallSize" /><span class="range">超</span>
            </td>
            <td class="rowItem" :class="{'s3c': (datas.beds.stage == 3)}">
              287<span class="unit">床</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s2c': (datas.beds.stage == 2)}">
              185<span class="unit">床</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s1c': (datas.beds.stage == 1)}">
              67<span class="unit">床</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem cellToday" :class="{'s1c': (datas.beds.stage == 1), 's2c': (datas.beds.stage == 2), 's3c': (datas.beds.stage == 3), 's4c': (datas.beds.stage == 4)}">
              {{ datas.beds.today }}<span class="unit">床</span>
            </td>
          </tr>
          <tr class="border">
            <td class="rowTitleNumber">
              ②
            </td>
            <td class="rowTitle">
              重症病床<br />稼働数
            </td>
            <td class="rowItem" :class="{'s4c': (datas.criticalBeds.stage == 4)}">
              24<span class="unit">床</span><br v-if="smallSize" /><span class="range">超</span>
            </td>
            <td class="rowItem" :class="{'s3c': (datas.criticalBeds.stage == 3)}">
              24<span class="unit">床</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s2c': (datas.criticalBeds.stage == 2)}">
              12<span class="unit">床</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s1c': (datas.criticalBeds.stage == 1)}">
              7<span class="unit">床</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem cellToday" :class="{'s1c': (datas.criticalBeds.stage == 1), 's2c': (datas.criticalBeds.stage == 2), 's3c': (datas.criticalBeds.stage == 3), 's4c': (datas.criticalBeds.stage == 4)}">
              {{ datas.criticalBeds.today }}<span class="unit">床</span>
            </td>
          </tr>
          <tr class="border">
            <td class="rowTitleSub" rowspan="2">
              県内<br />感染<br />状況
            </td>
            <td class="rowTitleNumber">
              ③
            </td>
            <td class="rowTitle">
              陽性者数
            </td>
            <td class="rowItem" :class="{'s4c': (datas.positive.stage == 4)}">
              100<span class="unit">人</span><br v-if="smallSize" /><span class="range">超</span>
            </td>
            <td class="rowItem" :class="{'s3c': (datas.positive.stage == 3)}">
              100<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s2c': (datas.positive.stage == 2)}">
              60<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s1c': (datas.positive.stage == 1)}">
              20<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem cellToday" :class="{'s1c': (datas.positive.stage == 1), 's2c': (datas.positive.stage == 2), 's3c': (datas.positive.stage == 3), 's4c': (datas.positive.stage == 4)}">
              {{ datas.positive.today }}<span class="unit">人</span>
            </td>
          </tr>
          <tr class="border">
            <td class="rowTitleNumber">
              ④
            </td>
            <td class="rowTitle">
              濃厚接触者<br />以外
            </td>
            <td class="rowItem" :class="{'s4c': (datas.contactor.stage == 4)}">
              40<span class="unit">人</span><br v-if="smallSize" /><span class="range">超</span>
            </td>
            <td class="rowItem" :class="{'s3c': (datas.contactor.stage == 3)}">
              40<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s2c': (datas.contactor.stage == 2)}">
              25<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s1c': (datas.contactor.stage == 1)}">
              10<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem cellToday" :class="{'s1c': (datas.contactor.stage == 1), 's2c': (datas.contactor.stage == 2), 's3c': (datas.contactor.stage == 3), 's4c': (datas.contactor.stage == 4)}">
              {{ datas.contactor.today }}<span class="unit">人</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="DataLabel-Footer">
        <div class="Footer-Left">
          <slot name="footer" />
          <open-data-link :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/shihyo1.html'" label="緊急事態措置等の強化・緩和に関する判断指標」の考え方" />
          <div>
            <time :datetime="formattedDate">
              {{ updateDate }} 更新
            </time>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Data from '@/data/monitoring.json'
import OpenDataLink from '@/components/OpenDataLink.vue'
import { convertDateToISO8601Format, convertDateToMDFormat } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    OpenDataLink
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    stage: {
      type: Number,
      default: 0
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    const datas = Data.data
    const updateDate = Data.date
    return {
      datas,
      updateDate,
      smallSize: {}
    }
  },
  methods: {
    handleResize: function() {
      if (window.innerWidth <= 600) {
          this.smallSize = true
      } else {
          this.smallSize = false
      }
    },
    formattedDate(dateString: string) {
      return convertDateToISO8601Format(dateString)
    },
    formattedDateMD(dateString: string) {
      return convertDateToMDFormat(dateString)
    }
  },
  mounted: function () {
    if (window.innerWidth <= 600) {
        this.smallSize = true
    } else {
        this.smallSize = false
    }
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }
})
</script>

<style lang="scss">
/* stylelint-disable no-descending-specificity */

.DataLabel {
  @include card-container();

  height: 100%;

  &-Header {
    display: flex;
    align-items: flex-start;
    flex-flow: column;
    padding: 0 10px;

    @include largerThan($medium) {
      padding: 0 5px;
    }

    @include largerThan($large) {
      width: 100%;
      flex-flow: row;
      flex-wrap: wrap;
      padding: 0;
    }
  }

  &-Inner {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: 22px;
    height: 100%;
  }

  &-Title {
    width: 100%;
    margin-bottom: 10px;
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: normal;
    color: $gray-2;

    @include largerThan($large) {
      margin-bottom: 20px;
      &.with-infoPanel {
        width: 50%;
      }
    }
  }

  &-TitleSub {
    width: 100%;
    margin-bottom: 2px;
    font-size: 0.9rem;
    line-height: 1.5;
    font-weight: normal;
    color: $gray-2;

    @include largerThan($large) {
      margin-bottom: 2px;
      &.with-infoPanel {
        width: 50%;
      }
    }
  }

  &-Table {
    border-collapse: collapse;
    color: $gray-1;
    font-size: 14px;
    margin-bottom: 15px;

    @include largerThan($large) {
      font-size: 16px;
    }

    thead td {
      background-color: $gray-4;
      border: #FFF solid 2px;
      padding: 3px;
      text-align: center;
    }

    tbody td {
      padding: 0;
      height: 60px;
    }

    .rowTitle {
      padding: 5px;
      font-size: 12px;

      @include largerThan($large) {
        font-size: 14px;
      }
    }

    .rowTitleSub {
      text-align: center;
      padding: 5px;
      font-size: 12px;

      @include largerThan($large) {
        font-size: 14px;
      }
    }

    .rowTitleNumber {
      padding: 0;
      font-size: 12px;

      @include largerThan($large) {
        font-size: 14px;
      }
    }

    tbody .rowItem {
      text-align: center;
    }

    tbody .cellToday {
      font-weight: bold;
    }

    tbody .rowItem .unit {
      padding-left: 2px;
      font-size: 12px;

      @include largerThan($large) {
        font-size: 14px;
      }
    }
    tbody .rowItem .range {
      font-size: 11px;

      @include largerThan($large) {
        font-size: 14px;
      }
    }

    .border {
      padding: 5px 0 5px 0;
      border-top: 1px solid #999;
    }

    .stage1 {
      background-color: $alert;
    }

    .stage2 {
      background-color: $caution;
    }

    .stage3 {
      background-color: $warning;
    }

    .stage4 {
      background-color: $danger;
      color: #FFF;
    }

    .s1c {
      background-color: $alert-cell;
    }

    .s2c {
      background-color: $caution-cell;
    }

    .s3c {
      background-color: $warning-cell;
    }

    .s4c {
      background-color: $danger-cell;
    }
  }
}

</style>
