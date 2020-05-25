<template>
  <div>
    <v-card flat>
      <v-card-text :class="{'Stage1': (stage == 1), 'Stage2': (stage == 2), 'Stage3': (stage == 3), 'Stage4': (stage == 4)}" class="StageDetailItem">
        <v-row >
          <v-col class="col-12 StageDetailItem-TitleSub">
            {{ titleSub }}
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="col-5 StageDetailItem-Title">
            {{ title }}
          </v-col>
          <v-col align="center" class="col-3 StageDetailItem-Label">
            {{ valueToday + $t(unit) }} <br v-if="smallSize" />
          </v-col>
          <v-col align="center" class="col-4 StageDetailItem-Label">
            Stage{{ stage }}
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
  .StageDetailItem {
    font-family: 'Hiragino Sans', sans-serif;
    padding: 9px 16px !important;
    margin: 9px 0;

    &-Title {
      font-size: 14px;
      padding: 0 12px;

      @include largerThan($large) {
        font-size: 16px;
        padding: 0 12px;
      }
    }

    &-TitleSub {
      font-size: 10px;
      padding: 0 12px;

      @include largerThan($large) {
        font-size: 12px;
        padding: 0 12px;
      }
    }

    &-Label {
      font-size: 14px;
      padding: 0 12px;

      @include largerThan($large) {
        font-size: 16px;
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
