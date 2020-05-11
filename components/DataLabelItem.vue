<template>
  <div>
    <v-card flat>
      <v-card-text :class="{'Stage1': (stage == 1), 'Stage2': (stage == 2), 'Stage3': (stage == 3), 'Stage4': (stage == 4)}" class="Data">
        <v-row >
          <v-col class="TitleSub" cols="12">
            {{ $t(titleSub) }}
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="Title" cols="4">
            {{ $t(title) }}
          </v-col>
          <v-col class="LabelMain" cols="5">
            {{ valueToday + $t(unit) }} <span class="TitleSub">{{ "前日 : " + valueYesterday + $t(unit) }}</span>
          </v-col>
          <v-col class="LabelMain" cols="3">
            <span class="Stage" >stage</span> {{ stage }}
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
  }
})
</script>

<style lang="scss">
  .Data {
    font-family: 'Hiragino Sans', sans-serif;
    padding: 9px 16px;
    margin: 9px 0;

    .Title {
      font-size: 16px;
      padding: 0 12px;

      @include largerThan($large) {
        font-size: 18px;
      }
    }

    .TitleSub {
      font-size: 12px;
      padding: 0 0 0 6px;
    }

    .LabelMain {
      font-size: 16px;
      padding: 0 12px;

      @include largerThan($large) {
        font-size: 20px;
      }
    }

    .Stage {
      font-size: 16px;

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
