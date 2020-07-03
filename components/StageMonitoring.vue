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
            <td class="rowTitleSub" rowspan="5">
              県<br />内
            </td>
            <td class="rowTitleNumber">
              ①
            </td>
            <td class="rowTitle">
              重症病床<br />稼働率
            </td>
            <td class="rowItem" :class="{'s4c': (datas.criticalBeds.stage == 4)}">
              60<span class="unit">%</span><br v-if="smallSize" /><span class="range">超</span>
            </td>
            <td class="rowItem" :class="{'s3c': (datas.criticalBeds.stage == 3)}">
              60<span class="unit">%</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s2c': (datas.criticalBeds.stage == 2)}">
              30<span class="unit">%</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s1c': (datas.criticalBeds.stage == 1)}">
              10<span class="unit">%</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem cellToday" :class="{'s1c': (datas.criticalBeds.stage == 1), 's2c': (datas.criticalBeds.stage == 2), 's3c': (datas.criticalBeds.stage == 3), 's4c': (datas.criticalBeds.stage == 4)}">
              {{ datas.criticalBeds.today }}<span class="unit">%</span>
            </td>
          </tr>
          <tr class="border">
            <td class="rowTitleNumber">
              ②
            </td>
            <td class="rowTitle">
              病床稼働率
            </td>
            <td class="rowItem" :class="{'s4c': (datas.beds.stage == 4)}">
              70<span class="unit">%</span><br v-if="smallSize" /><span class="range">超</span>
            </td>
            <td class="rowItem" :class="{'s3c': (datas.beds.stage == 3)}">
              70<span class="unit">%</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s2c': (datas.beds.stage == 2)}">
              45<span class="unit">%</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s1c': (datas.beds.stage == 1)}">
              30<span class="unit">%</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem cellToday" :class="{'s1c': (datas.beds.stage == 1), 's2c': (datas.beds.stage == 2), 's3c': (datas.beds.stage == 3), 's4c': (datas.beds.stage == 4)}">
              {{ datas.beds.today }}<span class="unit">%</span>
            </td>
          </tr>
          <tr class="border">
            <td class="rowTitleNumber">
              ③
            </td>
            <td class="rowTitle">
              陽性者数
            </td>
            <td class="rowItem" :class="{'s4c': (datas.positive.stage == 4)}">
              10<span class="unit">人</span><br v-if="smallSize" /><span class="range">超</span>
            </td>
            <td class="rowItem" :class="{'s3c': (datas.positive.stage == 3)}">
              10<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s2c': (datas.positive.stage == 2)}">
              5<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s1c': (datas.positive.stage == 1)}">
              1<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
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
              5<span class="unit">人</span><br v-if="smallSize" /><span class="range">超</span>
            </td>
            <td class="rowItem" :class="{'s3c': (datas.contactor.stage == 3)}">
              5<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s2c': (datas.contactor.stage == 2)}">
              3<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s1c': (datas.contactor.stage == 1)}">
              1<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem cellToday" :class="{'s1c': (datas.contactor.stage == 1), 's2c': (datas.contactor.stage == 2), 's3c': (datas.contactor.stage == 3), 's4c': (datas.contactor.stage == 4)}">
              {{ datas.contactor.today }}<span class="unit">人</span>
            </td>
          </tr>
          <tr class="border">
            <td class="rowTitleNumber">
              ⑤
            </td>
            <td class="rowTitle">
              陽性率
            </td>
            <td class="rowItem" :class="{'s4c': (datas.positiveRate.stage == 4)}">
              7<span class="unit">%</span><br v-if="smallSize" /><span class="range">超</span>
            </td>
            <td class="rowItem" :class="{'s3c': (datas.positiveRate.stage == 3)}">
              7<span class="unit">%</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s2c': (datas.positiveRate.stage == 2)}">
              3<span class="unit">%</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s1c': (datas.positiveRate.stage == 1)}">
              1<span class="unit">%</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem cellToday" :class="{'s1c': (datas.positiveRate.stage == 1), 's2c': (datas.positiveRate.stage == 2), 's3c': (datas.positiveRate.stage == 3), 's4c': (datas.positiveRate.stage == 4)}">
              {{ datas.positiveRate.today }}<span class="unit">%</span>
            </td>
          </tr>
          <tr class="border">
            <td class="rowTitleSub">
              都<br />内
            </td>
            <td class="rowTitleNumber">
              ⑥
            </td>
            <td class="rowTitle">
              経路不明<br />陽性者
            </td>
            <td class="rowItem" :class="{'s4c': (datas.pathUnknown.stage == 4)}">
              100<span class="unit">人</span><br v-if="smallSize" /><span class="range">超</span>
            </td>
            <td class="rowItem" :class="{'s3c': (datas.pathUnknown.stage == 3)}">
              100<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s2c': (datas.pathUnknown.stage == 2)}">
              50<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem" :class="{'s1c': (datas.pathUnknown.stage == 1)}">
              10<span class="unit">人</span><br v-if="smallSize" /><span class="range">以下</span>
            </td>
            <td class="rowItem cellToday" :class="{'s1c': (datas.pathUnknown.stage == 1), 's2c': (datas.pathUnknown.stage == 2), 's3c': (datas.pathUnknown.stage == 3), 's4c': (datas.pathUnknown.stage == 4)}">
              {{ datas.pathUnknown.today }}<span class="unit">人</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="DataLabel-Footer">
        <div class="Footer-Left">
          <slot name="footer" />
          <open-data-link :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/200703_kaitei.html'" label="【茨城県庁】茨城版コロナNext（コロナ対策指針）の改定について" />
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
import Data from '@/data/analysis.json'
import OpenDataLink from '@/components/OpenDataLink.vue'
import StageDetail from '@/components/StageDetail.vue'
import StageLevel2 from '@/components/StageLevel2.vue'
import StageLevel3 from '@/components/StageLevel3.vue'
import { convertDateToISO8601Format, convertDateToMDFormat } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    OpenDataLink,
    StageDetail,
    StageLevel2,
    StageLevel3
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
    const datas = Data.ibaraki
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

  &-Footer {
    @include font-size(12);

    padding: 0 !important;
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    color: $gray-3 !important;
    text-align: right;
    background-color: $white !important;
    .Permalink {
      color: $gray-3 !important;
    }

    .OpenDataLink {
      text-decoration: none;

      .ExternalLinkIcon {
        vertical-align: text-bottom;
      }
    }

    .Footer-Left {
      text-align: left;
    }

    .Footer-Right {
      position: relative;
      display: flex;
      align-items: flex-end;

      .DataLabel-Share-Opener {
        cursor: pointer;
        margin: -14px;
        padding: 14px;

        > svg {
          width: auto !important;
        }

        &:focus {
          outline: dotted $gray-3 1px;
        }
      }

      .DataLabel-Share-Buttons {
        position: absolute;
        padding: 8px;
        right: -4px;
        bottom: 1.5em;
        width: 240px;
        border: solid 1px $gray-4;
        background: $white !important;
        border-radius: 8px;
        text-align: left;
        font-size: 1rem;
        z-index: 2;

        > * {
          padding: 4px 0;
        }

        > .Close-Button {
          display: flex;
          justify-content: flex-end;
          color: $gray-3;

          button {
            border-radius: 50%;
            border: 1px solid #fff;

            &:focus {
              border: 1px dotted #707070;
              outline: none;
            }
          }
        }

        > .EmbedCode {
          position: relative;
          padding: 4px;
          padding-right: 30px;
          color: rgb(3, 3, 3);
          border: solid 1px #eee;
          border-radius: 8px;
          font-size: 12px;

          .EmbedCode-Copy {
            position: absolute;
            top: 0.3em;
            right: 0.3em;
            color: $gray-3;
          }

          button {
            border-radius: 50%;
            border: solid 1px #eee;

            &:focus {
              border: 1px dotted #707070;
              outline: none;
            }
          }
        }

        > .Buttons {
          display: flex;
          justify-content: center;
          margin-top: 4px;

          .icon-resize {
            border-radius: 50%;

            &.twitter {
              color: #fff;
              background: #2a96eb;
            }

            &.facebook {
              color: #364e8a;
            }

            &.line {
              color: #1cb127;
            }
          }

          button {
            width: 30px;
            height: 30px;
            margin-left: 4px;
            margin-right: 4px;

            &:focus {
              border-radius: 50%;
              border: 1px dotted #707070;
              outline: none;
            }
          }
        }
      }
    }
  }

  .overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    opacity: 0.8;

    > .overlay-text {
      text-align: center;
      padding: 2em;
      width: 60%;
      background: $gray-2;
      border-radius: 8px;
      color: $white !important;
    }
  }
}

textarea {
  font: 400 11px system-ui;
  width: 100%;
  height: 2.4rem;
}

.v-expansion-panel-header__icon {
  margin-left: -5px !important;

  & .v-icon--left {
    margin-right: 5px;
  }

  .v-expansion-panel--active & .v-icon {
    transform: rotate(90deg) !important;
  }
}

.expansion-panel-text {
  color: $gray-1;
}
</style>
