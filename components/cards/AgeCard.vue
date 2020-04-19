<template>
  <v-col cols="12" md="6" class="DataCard">
    <circle-chart-age
      :title="$t('年代別陽性患者数')"
      :title-id="'patietns-and-age'"
      :chart-data="ageGraph"
      :date="date"
      :unit="$t('人')"
      :info="$t('累計値')"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/hassei.html'"
      :source="$t('参考元データ')"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import CircleChartAge from '@/components/CircleChartAge.vue'

export default {
  components: {
    CircleChartAge
  },
  data() {
    return {
      date: String,
      ageGraph: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      this.ageGraph = formatVariableGraph(Data.age.data)
      this.date = Data.age.date
    }
  }
}
</script>
