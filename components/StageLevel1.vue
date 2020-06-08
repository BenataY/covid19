<template>
  <div>
    <v-card flat>
      <v-card-text class="StageTitleLevel1">
        <v-row >
          <v-col class="col-12">
            現在の規制　Stage1
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card flat>
      <v-card-text class="StageLevel1" align="center">
        <v-row>
          <v-col class="col-2 StageLevel1-No-Border">
            外出
          </v-col>
          <v-col class="col-6 StageLevel1-No-Border">
            平日昼間
          </v-col>
          <v-col class="col-1 StageLevel1-No-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel1-No-Border">

          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel1-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel1-Border">
            週末・夜間
          </v-col>
          <v-col class="col-1 StageLevel1-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel1-Border">

          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel1-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel1-Border">
            高齢者等
          </v-col>
          <v-col class="col-1 StageLevel1-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel1-Border">

          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel1-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel1-Border">
            県外
          </v-col>
          <v-col class="col-1 StageLevel1-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel1-Border">
            ※１
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel1-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel1-Border">
            イベント
          </v-col>
          <v-col class="col-1 StageLevel1-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel1-Border">
            ※２
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel1-Border">
            休業
          </v-col>
          <v-col class="col-10 StageLevel1-Border">
            休業要請なし
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel1-Border">
            学校
          </v-col>
          <v-col class="col-6 StageLevel1-Border">
            登校・授業
          </v-col>
          <v-col class="col-1 StageLevel1-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel1-Border">

          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 StageLevel1-No-Border">

          </v-col>
          <v-col class="col-6 StageLevel1-Border">
            部活動・給食
          </v-col>
          <v-col class="col-1 StageLevel1-Border">
            ○
          </v-col>
          <v-col class="col-3 StageLevel1-Border">

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
  .StageLevel1 {
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

  .StageTitleLevel1 {
    font-size: 20px !important;
    padding: 0 !important;
    text-align: center;
    background-color: $alert;
  }
</style>
