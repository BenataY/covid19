<template>
  <div class="map_content">
    <page-header class="mb-3">
      {{ $t('県内の感染者分布マップ') }}
    </page-header>
    <p>
      {{ $t('現在β版なため、表示に数秒かかります。（今後改善予定）') }}
    </p>
    <iframe
      src="/patients_map.html"
      title="感染者分布マップ"
    />
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
  head(): MetaInfo {
    return {
      title: this.$t('茨城県内の感染者状況分布マップ') as string
    }
  }
})
</script>

<style lang="scss" module>
  iframe {
      width: 100%;
      height: 500px;
      border:1px solid #CCC;
  }
</style>
