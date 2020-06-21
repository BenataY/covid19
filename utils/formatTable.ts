import dayjs from 'dayjs'

const headers = [
  { text: 'NO', value: '区分', align: 'center' },
  { text: 'リリース日', value: '公表日' },
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  { text: 'リンク', value: '詳細' }
]

type DataType = {
  NO: number
  リリース日: string
  居住地: string | null
  年代: string | null
  性別: '男性' | '女性' | string
  リンク: string | null
  退院: '◯' | null
  [key: string]: any
}

type TableDataType = {
  sortNo: number
  区分: string
  公表日: string
  居住地: DataType['居住地']
  年代: DataType['年代']
  性別: DataType['性別'] | '不明'
  データ元: DataType['データ元']
  退院: DataType['退院']
}

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: []
  }
  data.forEach(d => {
    const TableRow: TableDataType = {
      sortNo: Number(d['NO']) ?? 0,
      区分: d['NO'] + "例目",
      公表日: dayjs(d['リリース日']).format('MM/DD') ?? '不明',
      居住地: d['居住地'] ?? '調査中',
      年代: d['年代'] ?? '不明',
      性別: d['性別'] ?? '不明',
      データ元: d['データ元'],
      退院: d['退院']
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) =>
    a.sortNo === b.sortNo ? 0 : a.sortNo < b.sortNo ? 1 : -1
  )
  return tableDate
}
