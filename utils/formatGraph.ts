type DataType = {
  日付: Date
  陽性患者数: number
  検査数: number
}

export type GraphDataType = {
  label: string
  transition: number
  cumulative: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType[], mode: number) => {
  const graphData: GraphDataType[] = []
  const today = new Date()
  let patSum = 0
  data
    .filter(d => new Date(d['日付']) < today)
    .forEach(d => {
      const date = new Date(d['日付'])
      let subTotal
      if (mode == 1) {
        subTotal = d['検査数']
        if (subTotal < 0) { return; }
      } else {
        subTotal = d['陽性患者数']
        if (date < new Date('2020/3/16')) { return; }
      }
      if (!isNaN(subTotal)) {
        patSum += subTotal
        graphData.push({
          label: `${date.getMonth() + 1}/${date.getDate()}`,
          transition: subTotal,
          cumulative: patSum
        })
      }
    })
  return graphData
}
