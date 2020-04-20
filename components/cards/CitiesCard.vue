<template>
  <v-col cols="12" md="6" class="DataCard">
    <cities-bar-chart
      :title="$t('市町村別 陽性患者数')"
      :title-id="'cities'"
      :chart-id="'cities'"
      :chart-data="citiesData"
      :date="citiesData.date"
      :unit="$t('人')"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/hassei.html'"
      :source="$t('参考元データ')"
    >
    </cities-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import CitiesBarChart from '@/components/CitiesBarChart.vue'

export default {
  components: {
    CitiesBarChart
  },
  data() {
    const cities = [
      this.$t('陽性患者数')
    ]
    const citiesData = Data.cities.data
    return {
      citiesData,
      cities
    }
  }
}
</script>
