<template>
  <div :class="$style.map_content">
    <page-header class="mb-3">
      {{ $t('県内感染者分布マップ') }}
    </page-header>
    <iframe
      src="/patients_map.html"
      title="感染者分布マップ"
      frameborder="0"
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
      title: this.$t('県内感染者分布マップ') as string
    }
  }
})
</script>

<style lang="scss" module>
  .map_content > iframe {
    width: 100%;
    height: 78vh;
    border:1px solid #CCC;

    @include lessThan($small) {
      height: 70vh;
    }
  }

</style>
