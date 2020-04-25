<template>
  <div>
    <page-header class="mb-3">
      {{ $t('陽性患者分布MAP') }}
    </page-header>
    <iframe
      src="/patients_map.html"
      title="陽性患者分布MAP"
      frameborder="0"
      width="100%"
      height="600px"
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
      title: this.$t('陽性患者分布MAP') as string
    }
  }
})
</script>
