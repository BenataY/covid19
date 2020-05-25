<template>
  <div>
    <v-card flat>
      <v-card-text class="StageTitleLevel2">
        <v-row >
          <v-col class="col-12">
            Stage2
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card flat>
      <v-card-text class="StageLevel2" align="center">
        <v-row>
          <v-col class="col-2 StageLevel2-No-Border">
            外出
          </v-col>
          <v-col class="col-6 StageLevel2-No-Border">
            平日昼間
          </v-col>
          <v-col class="col-1 StageLevel2-No-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel2-No-Border">

          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel2-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel2-Border">
            週末・夜間
          </v-col>
          <v-col class="col-1 StageLevel2-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel2-Border">

          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel2-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel2-Border">
            リスクの高い方
          </v-col>
          <v-col class="col-1 StageLevel2-Border">
            ×
          </v-col>
          <v-col class="col-3 StageLevel2-Border">

          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel2-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel2-Border">
            東京圏
          </v-col>
          <v-col class="col-1 StageLevel2-Border">
            ×
          </v-col>
          <v-col class="col-3 StageLevel2-Border">

          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel2-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel2-Border">
            イベント
          </v-col>
          <v-col class="col-1 StageLevel2-Border">
            △
          </v-col>
          <v-col class="col-3 StageLevel2-Border">
            大規模自粛
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel2-Border">
            休業
          </v-col>
          <v-col class="col-6 StageLevel2-Border">
            カラオケ等遊興施設
          </v-col>
          <v-col class="col-1 StageLevel2-Border">
            △
          </v-col>
          <v-col class="col-3 StageLevel2-Border">
            一部解除
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel2-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel2-Border">
            映画館等の劇場
          </v-col>
          <v-col class="col-1 StageLevel2-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel2-Border">

          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel2-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel2-Border">
            運動・遊戯施設
          </v-col>
          <v-col class="col-1 StageLevel2-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel2-Border">

          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel2-Border">
            学校
          </v-col>
          <v-col class="col-6 StageLevel2-Border">
            県立学校
          </v-col>
          <v-col class="col-1 StageLevel2-Border">
            ×
          </v-col>
          <v-col class="col-3 StageLevel2-Border">

          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel2-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel2-Border">
            分散登校
          </v-col>
          <v-col class="col-1 StageLevel2-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel2-Border">
            週３〜５日
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel2-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel2-Border">
            部活動・給食
          </v-col>
          <v-col class="col-1 StageLevel2-Border">
            ×
          </v-col>
          <v-col class="col-3 StageLevel2-Border">

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
  .StageLevel2 {
    font-family: 'Hiragino Sans', sans-serif;
    font-size: 14px;
    padding: 0 12px;

    @include largerThan($large) {
      font-size: 16px;
    }

    &-Border {
      padding: 5px 0 5px 0;
      border-top: 1px solid #999;
    }

    &-No-Border {
      padding: 5px 0 5px 0;
    }
  }

  .StageTitleLevel2 {
    font-size: 20px !important;
    padding: 0 !important;
    text-align: center;
    background-color: #FFE200;
  }
</style>
