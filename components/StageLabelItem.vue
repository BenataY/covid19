<template>
  <div>
    <v-card flat>
      <v-card-text class="Data" align="center">
        <v-row>
          <v-col class="col-2 Title">
            外出
          </v-col>
          <v-col class="col-6 Title">
            平日昼間
          </v-col>
          <v-col class="col-4 Title">
            ○
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 Title">

          </v-col>
          <v-col class="col-6 Title">
            夜間
          </v-col>
          <v-col class="col-4 Title">
            ×
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 Title">

          </v-col>
          <v-col class="col-6 Title">
            リスクの高い方
          </v-col>
          <v-col class="col-4 Title">
            ×
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 Title">

          </v-col>
          <v-col class="col-6 Title">
            東京圏
          </v-col>
          <v-col class="col-4 Title">
            ×
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 Title">

          </v-col>
          <v-col class="col-6 Title">
            イベント
          </v-col>
          <v-col class="col-4 Title">
            ×
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 Title">
            休業
          </v-col>
          <v-col class="col-6 Title">
            ３密になりやすい業種
          </v-col>
          <v-col class="col-4 Title">
            ×
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-2 Title">

          </v-col>
          <v-col class="col-6 Title">
            劇場・イベントなど
          </v-col>
          <v-col class="col-4 Title">
            ×
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
  .Data {
    font-family: 'Hiragino Sans', sans-serif;
    padding: 9px 16px !important;
    margin: 9px 0;

    .Title {
      font-size: 14px;
      padding: 0 12px;

      @include largerThan($large) {
        font-size: 18px;
      }
    }

    .TitleSub {
      font-size: 10px;
      padding: 0 12px;

      @include largerThan($large) {
        font-size: 12px;
      }
    }

    .LabelMain {
      font-size: 16px;
      padding: 0 12px;

      @include largerThan($large) {
        font-size: 20px;
      }
    }

    .LabelSub {
      font-size: 10px;
      padding: 0;

      @include largerThan($large) {
        font-size: 12px;
      padding: 0 0 0 6px;
      }
    }

    .Stage {
      font-size: 12px;

      @include largerThan($large) {
        font-size: 18px;
      }
    }
  }

  .Stage1 {
    background-color: #D9ECF7;
  }

  .Stage2 {
    background-color: #FCF8E3;
  }

  .Stage3 {
    background-color: #fff3e6;
  }

  .Stage4 {
    background-color: #F2DEDE;
  }
</style>
