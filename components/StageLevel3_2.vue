<template>
  <div>
    <v-card flat>
      <v-card-text class="StageTitleLevel4">
        <v-row >
          <v-col class="col-12">
            現在の規制　Stage3
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card flat>
      <v-card-text class="StageLevel4" align="center">
        <v-row>
          <v-col class="col-12 StageLevel4-Border-title">
            県独自の緊急事態宣言の延長（2/8 〜 2/28）
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-Border-title">
            県内の不要不急の外出自粛（継続）
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ 県内全域において、不要不急の外出・移動の自粛を要請
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-Border-title">
            営業時間短縮要請等（拡充）
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ 県内すべての飲食店に対し、午後８時から午前５時までの営業自粛（酒類の提供は午後７時まで）を要請
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-Border-title">
            催物（イベント等）開催制限（新規）
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ イベントを開催する場合は、人数上限5,000人、かつ、収容率50%以下とすることを要請
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-Border-title">
            他都道府県との不要不急の往来自粛要請等（継続）
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ 緊急事態宣言は発令されている都道府県との不要不急の往来自粛を要請
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ 直近１週間の陽性者数が人口10万人あたり15人を超える都道府県との往来（通勤・通学含む）の際は、感染症対策を徹底するなど特に注意することを要請
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-Border-title">
            出勤者数の削減（継続）
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ テレワークを積極的に活用し、可能な限り出勤職員数を削減することを要請
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ 混雑緩和のため時差出勤の活用を要請
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-Border-title">
            部活動の制限（新規）
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ 大会は、主催団体に延期又は中止を要請
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ 県立学校は、他校との練習試合、合宿等は中止
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ その他の公立学校及び私立学校は、他校との練習試合、合宿等の中止を要請
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-Border-title">
            県有施設の営業自粛（新規）
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ 県施設については、県立図書館を除いてすべて休館
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ 宿泊施設は、新規予約受付を中止
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-Border-title">
            社会福祉施設従業員の検査（継続）
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 StageLevel4-No-Border">
            ■ 福祉施設におけるクラスター発生の可能性を低減するため、従事者に対する緊急検査を実施
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    titleSub: {
      type: String,
      default: ''
    },
    valueToday: {
      type: String,
      default: ''
    },
    valueYesterday: {
      type: String,
      default: ''
    },
    stage: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: '%'
    }
  },
  data() {
    return {
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
  .StageLevel4 {
    font-family: 'Hiragino Sans', sans-serif;
    font-size: 14px;
    padding: 0 12px;
    text-align: left;

    @include largerThan($large) {
      font-size: 16px;
    }

    &-Border {
      padding: 5px 0 5px 0;
      border-top: 1px solid #999;
    }

    &-Border-title {
      padding: 5px 0 5px 0;
      border-top: 1px solid #999;
      font-weight: bold;
    }

    &-No-Border {
      padding: 5px 0 5px 0;
    }
  }

  .StageTitleLevel4 {
    font-size: 20px !important;
    padding: 0 !important;
    text-align: center;
    background-color: $danger;
    color: $white !important;
  }
</style>
