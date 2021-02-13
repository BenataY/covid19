import dayjs from 'dayjs'

const headers = [
  { text: 'no', value: 'NO', align: 'center' },
  { text: 'date', value: '公表日' },
  { text: 'addr', value: '居住地' },
  { text: 'age', value: '年代' },
  { text: 'sex', value: '性別' },
  { text: 'class', value: '区分', align: 'center' }
]

type DataType = {
  no: number
  date: string
  addr: string | null
  age: string | null
  sex: '男性' | '女性' | string
  class: string | null
  [key: string]: any
}

type TableDataType = {
  sortNo: number
  NO: number
  公表日: string
  居住地: DataType['addr']
  年代: DataType['age']
  性別: DataType['sex'] | '不明'
  区分: DataType['class']
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
      sortNo: Number(d['no']) ?? 0,
      NO: d['no'],
      公表日: dayjs(d['date']).format('MM/DD') ?? '不明',
      居住地: d['addr'] ?? '調査中',
      年代: d['age'] ?? '不明',
      性別: d['sex'] ?? '不明',
      区分: d['class']
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) =>
    a.sortNo === b.sortNo ? 0 : a.sortNo < b.sortNo ? 1 : -1
  )
  return tableDate
}
