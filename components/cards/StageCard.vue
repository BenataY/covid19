<template>
  <v-col cols="12" md="6" class="DataCard">
    <stage-label
      :title="'茨城版コロナNext（コロナ対策指針）'"
      :title-id="'stage'"
      :date="date"
      :stage="3"
    />
  </v-col>
</template>

<script>
import Data from '@/data/analysis.json'
import StageLabel from '@/components/StageLabel.vue'

export default {
  components: {
    StageLabel
  },
  data() {
    const date = Data.date
    return {
      date
    }
  }
}
</script>
