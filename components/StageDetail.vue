<template>
  <div class="StageDetail">
    <div class="StageDetail-Header">
      <h3
        class="StageDetail-Title"
      >
        予防的観点からStage2の対策中 <br /> 6月8日以降Stage1へ緩和予定
      </h3>
    </div>
    <div class="StageDetail-Data">
      <stage-detail-item
        title="重症病床稼働率"
        :valueToday="datas.criticalBeds.today"
        :valueYesterday="datas.criticalBeds.yesterday"
        :stage="datas.criticalBeds.stage"
      />
      <stage-detail-item
        title="病床稼働率"
        :valueToday="datas.beds.today"
        :valueYesterday="datas.beds.yesterday"
        :stage="datas.beds.stage"
      />
      <stage-detail-item
        title="陽性者数"
        titleSub="１日あたり"
        :valueToday="datas.positive.today"
        :valueYesterday="datas.positive.yesterday"
        :stage="datas.positive.stage"
        unit="人"
      />
      <stage-detail-item
        title="濃厚接触者以外"
        titleSub="陽性者のうち"
        :valueToday="datas.contactor.today"
        :valueYesterday="datas.contactor.yesterday"
        :stage="datas.contactor.stage"
        unit="人"
      />
      <stage-detail-item
        title="陽性率"
        :valueToday="datas.positiveRate.today"
        :valueYesterday="datas.positiveRate.yesterday"
        :stage="datas.positiveRate.stage"
      />
      <stage-detail-item
        title="経路不明陽性者"
        titleSub="【都内】１日あたり"
        :valueToday="datas.pathUnknown.today"
        :valueYesterday="datas.pathUnknown.yesterday"
        :stage="datas.pathUnknown.stage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Data from '@/data/analysis.json'
import OpenDataLink from '@/components/OpenDataLink.vue'
import StageDetailItem from '@/components/StageDetailItem.vue'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    OpenDataLink,
    StageDetailItem
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
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    const datas = Data.ibaraki
    return {
      datas
    }
  },
  computed: {
    formattedDate(): string {
      return convertDatetimeToISO8601Format(this.date)
    }
  }
})
</script>

<style lang="scss">
  .StageDetail {

    &-Title {
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
  }
</style>
