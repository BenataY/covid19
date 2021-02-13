<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-table
      :title="$t('陽性患者の属性')"
      :title-id="'attributes-of-confirmed-cases'"
      :chart-data="patientsTable"
      :chart-option="{}"
      :date="Patients.date"
      :info="sumInfoOfPatients"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/hassei.html'"
      source="参考元データ"
    />
  </v-col>
</template>

<script>
import PatientsSummary from '@/data/patientsSummary.json'
import Patients from '@/data/patients.json'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    DataTable
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(PatientsSummary.data)
    // 感染者数
    const patientsTable = formatTable(Patients.data)

    const sumInfoOfPatients = {
      lText: patientsGraph[
        patientsGraph.length - 1
      ].cumulative.toLocaleString(),
      sText: this.$t('{date}の累計', {
        date: patientsGraph[patientsGraph.length - 1].label
      }),
      unit: this.$t('人')
    }

    // 陽性患者の属性 ヘッダー翻訳
    for (const header of patientsTable.headers) {
      header.text =
        header.value === '退院' ? '退院※' : header.value
    }
    // 陽性患者の属性 中身の翻訳
    for (const row of patientsTable.datasets) {
      if (row['年代'] === '10歳未満') {
        row['年代'] = '10歳未満'
      } else if (row['年代'] === '不明') {
        row['年代'] = '不明'
      } else if (row['年代'] === '非公表') {
        row['年代'] = '非公表'
      } else if (row['年代'] === '調査中') {
        row['年代'] = '調査中'
      }
    }

    const data = {
      PatientsSummary,
      Patients,
      patientsTable,
      sumInfoOfPatients
    }
    return data
  }
}
</script>
