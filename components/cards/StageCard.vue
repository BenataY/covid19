<template>
  <v-col cols="12" md="6" class="DataCard">
    <stage-view
      :title="'茨城版コロナNext（現在のコロナ対策指針）'"
      :title-id="'stage'"
      :date="date"
      :stage="2"
    />
  </v-col>
</template>

<script>
import Data from '@/data/analysis.json'
import StageView from '@/components/StageView.vue'

export default {
  components: {
    StageView
  },
  data() {
    const date = Data.date
    return {
      date
    }
  }
}
</script>
