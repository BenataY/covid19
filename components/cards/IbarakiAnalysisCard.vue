<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-label
      :title="'緊急事態措置等の強化・緩和に関する判断指標'"
      :title-id="'ibaraki-analysis'"
      :date="date"
    />
  </v-col>
</template>

<script>
import Data from '@/data/analysis.json'
import DataLabel from '@/components/DataLabel.vue'

export default {
  components: {
    DataLabel
  },
  data() {
    const date = Data.date
    return {
      date
    }
  }
}
</script>
