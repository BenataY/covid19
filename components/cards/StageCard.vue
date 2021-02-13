<template>
  <v-col cols="12" md="6" class="DataCard">
    <stage-view
      :title="'茨城版コロナNext'"
      :title-id="'stage'"
    />
  </v-col>
</template>

<script>
import StageView from '@/components/StageView.vue'

export default {
  components: {
    StageView
  }
}
</script>
