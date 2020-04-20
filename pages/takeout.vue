<template>
  <div class="Contacts">
    <page-header class="mb-3">
      {{ $t('茨城県内テイクアウト情報') }}
    </page-header>
    <StaticCard>
      {{
        $t(
          '各市町村のテイクアウト情報の一覧'
        )
      }}
      <br />
      <br />
    </StaticCard>
    <div class="Contacts-Card">
      <table class="Contacts-Card-Table" v-bind="tableAttrs">
        <thead>
          <tr>
            <th class="text-center" scope="col">
              {{ $t('テイクアウト情報') }}
            </th>
            <th class="text-center" scope="col">{{ $t('市町村') }}</th>
            <th class="text-center" scope="col">{{ $t('情報元') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="content" v-bind="headingAttrs">
              <a
                :href="
                  $t(
                    'https://mito.inetcci.or.jp/topics/takeout.html'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('#テイクアウトミト') }}
              </a>
            </td>
            <td class="bureau">{{ $t('水戸市') }}</td>
            <td class="bureau">
              <a
                :href="
                  $t(
                    'https://mito.inetcci.or.jp/'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('水戸商工会議所') }}
              </a>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              <a
                :href="
                  $t(
                    'http://www.hitachicci.or.jp/takeout/index.html'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('おうちでひたちごはん') }}
              </a>
            </td>
            <td class="bureau">{{ $t('日立市') }}</td>
            <td class="bureau">
              <a
                :href="
                  $t(
                    'http://www.hitachicci.or.jp/'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('日立商工会議所') }}
              </a>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              <a
                :href="
                  $t(
                    'https://no-sss.net/ishioka-yell/%e7%9f%b3%e5%b2%a1%e3%81%ae%e3%81%86%e3%81%be%e3%81%84%e9%a3%af'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('#石岡エール飯') }}
              </a>
            </td>
            <td class="bureau">{{ $t('石岡市') }}</td>
            <td class="bureau">
              <a
                :href="
                  $t(
                    'https://no-sss.net/ishioka-yell/'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('いしおか応援プロジェクト') }}
              </a>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              <a
                :href="
                  $t(
                    'https://yuuki.inetcci.or.jp/musubimeshi'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('#結城むすびめし') }}
              </a>
            </td>
            <td class="bureau">{{ $t('結城市') }}</td>
            <td class="bureau">
              <a
                :href="
                  $t(
                    'https://yuuki.inetcci.or.jp/'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('結城商工会議所') }}
              </a>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              <a
                :href="
                  $t(
                    'http://www.hcci.jp/corona/takeout/index.htm'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('テイクアウト＆デリバリー応援キャンペーン') }}
              </a>
            </td>
            <td class="bureau">{{ $t('ひたちなか市') }}</td>
            <td class="bureau">
              <a
                :href="
                  $t(
                    'http://www.hcci.jp/'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('ひたちなか商工会議所') }}
              </a>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              <a
                :href="
                  $t(
                    'http://www.shimodate-cci.or.jp/latest_information/202004062200/'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('shimodateテイクアウトサービス') }}
              </a>
            </td>
            <td class="bureau">{{ $t('筑西市') }}</td>
            <td class="bureau">
              <a
                :href="
                  $t(
                    'http://www.shimodate-cci.or.jp/'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('下館商工会議所') }}
              </a>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              <a
                :href="
                  $t(
                    'http://www.kamisu-kanko.jp/taberu/index.html'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('#神栖テイクアウト') }}
              </a>
            </td>
            <td class="bureau">{{ $t('神栖市') }}</td>
            <td class="bureau">
              <a
                :href="
                  $t(
                    'http://www.kamisu-kanko.jp/index.html'
                  )
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ $t('神栖市観光協会') }}
              </a>
            </td>
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
