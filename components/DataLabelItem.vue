<template>
  <div>
    <v-card flat>
      <v-card-text class="Data">
        <v-row>
          <v-col class="TitleSub" cols="4">
            {{ $t(titleSub) }}
          </v-col>
          <v-col class="TitleSub" cols="4">

          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="Title" cols="4">
            {{ $t(title) }}
          </v-col>
          <v-col class="LabelMain" cols="4">
            {{ valueToday + $t(unit) }} <span class="TitleSub">{{ "前日 : " + valueYesterday + $t(unit) }}</span>
          </v-col>
          <v-col class="LabelMain" cols="4">
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
    background-color: $gray-5;

    .Title {
      font-size: 16px;
      padding: 0 12px;

      @include largerThan($large) {
        font-size: 20px;
      }
    }

    .TitleSub {
      font-size: 12px;
      padding: 0 12px 6px 12px;
    }

    .LabelMain {
      font-size: 20px;
      padding: 0 12px;

      @include largerThan($large) {
        font-size: 24px;
      }
    }

    .Stage {
      font-size: 18px;
    }
  }
</style>
