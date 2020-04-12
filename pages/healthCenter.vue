<template>
  <div class="Contacts">
    <page-header class="mb-3">
      {{ $t('各保健所相談窓口') }}
    </page-header>
    <StaticCard>
      {{
        $t(
          '新型コロナウイルス感染症に関する一般な相談窓口'
        )
      }}
      <br />
      {{
        $t(
          '新型コロナウイルス感染症に関する相談,感染予防に関すること,心配な症状が出たときの対応,など'
        )
      }}
      <a href=''></a>

      <a
        :href="
          $t(
            'https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/corona-soudan.html'
          )
        "
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ $t('新型コロナウイルス感染症に関する電話相談窓口について') }}
      </a>
      <br />
      <br />
    </StaticCard>
    <div class="Contacts-Card">
      <table class="Contacts-Card-Table" v-bind="tableAttrs">
        <thead>
          <tr>
            <th class="text-center" scope="col">
              {{ $t('保健所名') }}
            </th>
            <th class="text-center" scope="col">{{ $t('受付時間') }}</th>
            <th class="text-center" scope="col">{{ $t('連絡先') }}</th>
            <th class="text-center" scope="col">{{ $t('管内市町村') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('茨城県庁') }}
            </td>
            <td class="bureau">{{ $t('24時間対応 (土日・祝祭日を含む)') }}</td>
            <td class="tel"><a href="tel:029-301-3200">029-301-3200</a></td>
            <td class="bureau">{{ $t('茨城県内全域') }}</td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('水戸保健所') }}
            </td>
            <td class="bureau">{{ $t('平日 9:00 〜 17:00') }}</td>
            <td class="tel"><a href="tel:029-350-7650">029-350-7650</a></td>
            <td class="bureau">{{ $t('水戸市') }}</td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('中央保健所') }}
            </td>
            <td class="bureau">{{ $t('平日 9:00 〜 17:00') }}</td>
            <td class="tel"><a href="tel:029-241-0100">029-241-0100</a></td>
            <td class="bureau">{{ $t('笠間市,小美玉市,茨城町,大洗町,城里町') }}</td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('ひたちなか保健所') }}
            </td>
            <td class="bureau">{{ $t('平日 9:00 〜 17:00') }}</td>
            <td class="tel"><a href="tel:029-265-5515">029-265-5515</a></td>
            <td class="bureau">{{ $t('常陸太田市,ひたちなか市,常陸大宮市,那珂市,東海村,大子町') }}</td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('日立保健所') }}
            </td>
            <td class="bureau">{{ $t('平日 9:00 〜 17:00') }}</td>
            <td class="tel"><a href="tel:0294-22-4188">0294-22-4188</a></td>
            <td class="bureau">{{ $t('日立市,高萩市,北茨城市') }}</td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('潮来保健所') }}
            </td>
            <td class="bureau">{{ $t('平日 9:00 〜 17:00') }}</td>
            <td class="tel"><a href="tel:0299-66-2114">0299-66-2114</a></td>
            <td class="bureau">{{ $t('鹿嶋市,潮来市,神栖市,行方市,鉾田市') }}</td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('竜ケ崎保健所') }}
            </td>
            <td class="bureau">{{ $t('平日 9:00 〜 17:00') }}</td>
            <td class="tel"><a href="tel:0297-62-2161">0297-62-2161</a></td>
            <td class="bureau">{{ $t('龍ケ崎市,取手市,牛久市,守谷市,稲敷市,美浦村,阿見町,河内町,利根町') }}</td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('土浦保健所') }}
            </td>
            <td class="bureau">{{ $t('平日 9:00 〜 17:00') }}</td>
            <td class="tel"><a href="tel:029-821-5342">029-821-5342</a></td>
            <td class="bureau">{{ $t('土浦市,石岡市,かすみがうら市') }}</td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('つくば保健所') }}
            </td>
            <td class="bureau">{{ $t('平日 9:00 〜 17:00') }}</td>
            <td class="tel"><a href="tel:029-851-9287">029-851-9287</a></td>
            <td class="bureau">{{ $t('常総市,つくば市,つくばみらい市') }}</td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('筑西保健所') }}
            </td>
            <td class="bureau">{{ $t('平日 9:00 〜 17:00') }}</td>
            <td class="tel"><a href="tel:0296-24-3911">0296-24-3911</a></td>
            <td class="bureau">{{ $t('結城市,下妻市,筑西市,桜川市,八千代町') }}</td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('古河保健所') }}
            </td>
            <td class="bureau">{{ $t('平日 9:00 〜 17:00') }}</td>
            <td class="tel"><a href="tel:0280-32-3021">0280-32-3021</a></td>
            <td class="bureau">{{ $t('古河市,坂東市,五霞町,境町') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader
  },
  data() {
    return {
      pc: true
    }
  },
  computed: {
    tableAttrs(): any {
      return this.pc ? {} : { role: 'presentation' }
    },
    headingAttrs(): any {
      return this.pc ? {} : { role: 'heading', 'aria-level': '3' }
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      this.pc = window.innerWidth > 768
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('お問い合わせ先一覧') as string
    }
  }
})
</script>

<style lang="scss">
.Contacts {
  &-Card {
    @include card-container();

    &-Table {
      width: 100%;
      border-collapse: collapse;

      th {
        font-size: 14px !important;
      }

      td {
        padding: 0 16px;
        font-size: 14px;
      }

      @include largerThan($medium) {
        thead tr {
          height: 48px;
        }

        tbody tr {
          height: 96px;
        }

        th,
        tr:not(:last-child) {
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: thin solid rgba(0, 0, 0, 0.12);
        }

        tr:last-child {
          border: none;
        }
      }

      @include lessThan($medium) {
        thead {
          display: none;
        }

        tbody {
          tr {
            height: auto;

            .content {
              font-weight: bold;
              border-bottom: none !important;
              padding-top: 12px;
              padding-bottom: 8px;
            }

            .bureau {
              border-bottom: none !important;
            }

            .tel {
              padding-bottom: 12px;
            }
          }

          tr:not(:last-child) {
            border-bottom: thin solid rgba(0, 0, 0, 0.12);
          }
        }

        td {
          display: block;
        }
      }
    }
  }
}
</style>
