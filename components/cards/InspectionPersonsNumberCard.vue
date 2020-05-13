<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施人数')"
      :title-id="'number-of-inspection-persons'"
      :chart-id="'number-of-inspection-persons'"
      :chart-data="graphData"
      :date="data.patients_summary.date"
      :unit="$t('人')"
      :url="'https://www.pref.ibaraki.jp/hokenfukushi/eiken/kikaku/covid-19_ibarakieiken_kensa.html'"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
              )
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 検査実施人数グラフ
    const graphData = formatGraph(Data.patients_summary.data, 1)

    return {
      data: Data,
      graphData
    }
  }
}
</script>
