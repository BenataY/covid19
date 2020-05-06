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
      <div class="DataLabel-Data">
        <data-label-item
          title="陽性率"
          titleSub="全期間"
          :value="datas.kensaTotal.value"
          :sub1="datas.kensaTotal.sub1"
          :sub2="datas.kensaTotal.sub2"
          annotation="（注）検査数の確定は数日遅いため、若干数値が高くなります"
        />
        <data-label-item
          title="陽性率"
          titleSub="直近1週間"
          :value="datas.kensa1week.value"
          :sub1="datas.kensa1week.sub1"
          :sub2="datas.kensa1week.sub2"
          :startdate="datas.kensa1week.start"
          :enddate="datas.kensa1week.end"
          annotation="（注）検査数が確定している直近の1週間で算出してます"
        />
        <data-label-item
          title="病床使用率"
          :value="datas.sickbeds.value"
          :sub1="datas.sickbeds.sub1"
          :sub2="datas.sickbeds.sub2"
          subUnit="床"
        />
        <data-label-item
          title="経路不明者"
          titleSub="直近1週間"
          value="準備中"
          unit=""
        />
      </div>
      <div class="DataLabel-Footer">
        <div class="Footer-Left">
          <slot name="footer" />
          <div>
            <time :datetime="formattedDate">
              {{ $t('{date} 更新', { date }) }}
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
import DataLabelItem from '@/components/DataLabelItem.vue'

export default Vue.extend({
  components: {
    DataLabelItem
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
  },
  mounted() {
  },
  methods: {
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
