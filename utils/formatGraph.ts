type DataType = {
  date: Date
  cnt: number
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
    .filter(d => new Date(d['date']) < today)
    .forEach(d => {
      const date = new Date(d['date'])
      let subTotal

      subTotal = d['cnt']
      if (date < new Date('2020/3/16')) { return; }

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
