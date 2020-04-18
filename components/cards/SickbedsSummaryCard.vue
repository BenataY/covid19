<template>
  <v-col cols="12" md="6" class="DataCard">
    <circle-chart
      :title="$t('入院患者数と残病床数')"
      :title-id="'patietns-and-sickedbeds'"
      :chart-data="sickbedsGraph"
      :date="date"
      :unit="$t('床')"
      :info="$t('入院患者数') + '/' + $t('病床数')"
      :url="'https://ibarakinews.jp/news/newsdetail.php?f_jun=15870409966983'"
      :source="$t('参考元データ')"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import CircleChart from '@/components/CircleChart.vue'

export default {
  components: {
    CircleChart
  },
  data() {
    return {
      date: String,
      sickbedsGraph: []
    }
  },
  created() {
    this.setData()
  },
  methods: {
    setData() {
      this.sickbedsGraph = formatVariableGraph(Data.sickbeds_summary.data)
      this.date = Data.sickbeds_summary.date
    }
  }
}
</script>
