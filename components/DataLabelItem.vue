<template>
  <div>
    <v-card flat>
      <v-card-text class="Data">
        <v-row v-if="titleSub" cols="12">
          <v-col class="TitleSub">
            {{ $t(titleSub) }}<span v-if="startdate && enddate" >（ {{ startdate }} 〜 {{ enddate }} ）</span>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="Title" cols="4">
            {{ $t(title) }}
          </v-col>
          <v-col class="LabelMain" cols="8">
            {{ value + $t(unit) }}<span v-if="sub1 && sub2" >（ {{ sub1 + $t(subUnit) }} / {{ sub2 + $t(subUnit) }} ）</span>
          </v-col>
        </v-row>
        <v-row v-if="annotation" cols="12">
          <v-col class="Annotation">
            {{ $t(annotation) }}
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
    value: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: '%'
    },
    sub1: {
      type: String,
      default: ''
    },
    sub2: {
      type: String,
      default: ''
    },
    subUnit: {
      type: String,
      default: '人'
    },
    startdate: {
      type: String,
      default: ''
    },
    enddate: {
      type: String,
      default: ''
    },
    annotation: {
      type: String,
      default: ''
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
      font-size: 18px;
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

    .LabelMain span {
      font-size: 12px;
      color: $gray-1;
      padding: 0 12px;
    }

    .Annotation {
      font-size: 12px;
      color: $gray-3;
      padding: 3px 12px;
    }
  }
</style>
