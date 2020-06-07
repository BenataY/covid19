<template>
  <v-col cols="12" md="6" class="DataCard">
    <stage-monitoring
      :title="'判断指標と現在の状況'"
      :title-id="'monitoring'"
    />
  </v-col>
</template>

<script>
import StageMonitoring from '@/components/StageMonitoring.vue'

export default {
  components: {
    StageMonitoring
  }
}
</script>
