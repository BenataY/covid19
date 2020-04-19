aaaaaaaaaaaaaaa
<template>
  <v-col cols="12" md="6" class="DataCard">
    <cities-bar-chart
      :title="$t('市町村毎の感染者数')"
      :title-id="'cities'"
      :chart-id="'cities'"
      :chart-data="citiesGraph"
      :date="date"
      :unit="$t('人')"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import CitiesBarChart from '@/components/CitiesBarChart.vue'

export default {
  components: {
    CitiesBarChart
  },
  data() {
    return {
      date: String,
      citiesGraph: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      this.citiesGraph = formatVariableGraph(Data.cities.data)
      this.date = Data.cities.date
    }
  }
}
</script>
