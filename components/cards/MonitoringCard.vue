<template>
  <v-col cols="12" md="6" class="DataCard">
    <stage-monitoring
      :title="'茨城版コロナNext'"
      :title-id="'stage'"
      :date="date"
      :stage="2"
    />
  </v-col>
</template>

<script>
import Data from '@/data/analysis.json'
import StageMonitoring from '@/components/StageMonitoring.vue'

export default {
  components: {
    StageMonitoring
  },
  data() {
    const date = Data.date
    return {
      date
    }
  }
}
</script>
