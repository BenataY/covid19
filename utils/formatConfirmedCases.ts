type DataType = {
  children: [
    {
      attr: '陽性患者数'
      value: number
      children: [
        {
          attr: '療養中'
          value: number
          children: [
            {
              attr: '入院中'
              value: number
              children: [
                {
                  attr: '重症'
                  value: number
                },
                {
                  attr: '中等症'
                  value: number
                },
                {
                  attr: '軽症'
                  value: number
                }
              ]
            },
            {
              attr: '自宅療養'
              value: number
            },
            {
              attr: '宿泊療養'
              value: number
            }
          ]
        },
        {
          attr: '退院退所'
          value: number
        },
        {
          attr: '死亡'
          value: number
        },
        {
          attr: 'その他'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  陽性者数: number
  療養中: number
  入院中: number
  重症: number
  中等症: number
  軽症: number
  自宅療養: number
  宿泊療養: number
  退院退所: number
  死亡: number
  その他: number
}

interface ChildData {
  attr: string
  value: number
}

type ChildDataType = {
  attr?: string
  value?: number
  children?: ChildData[]
}

function getSelectedItem(data: DataType, key: string) {
  let result: number | undefined
  const recursiveSearch = (data: ChildDataType) => {
    if (result) {
      return
    }
    if (data.attr === key) {
      result = data.value
    } else if (data.children) {
      data.children.forEach((child: ChildDataType) => {
        if (result) {
          return
        }
        recursiveSearch(child)
      })
    }
  }
  recursiveSearch(data)

  return result || 0
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  return {
    陽性者数: getSelectedItem(data, '陽性患者数'),
    療養中: getSelectedItem(data, '療養中'),
    入院中: getSelectedItem(data, '入院中'),
    重症: getSelectedItem(data, '重症'),
    中等症: getSelectedItem(data, '中等症'),
    軽症: getSelectedItem(data, '軽症'),
    自宅療養: getSelectedItem(data, '自宅療養'),
    宿泊療養: getSelectedItem(data, '宿泊療養'),
    退院退所: getSelectedItem(data, '退院退所'),
    死亡: getSelectedItem(data, '死亡'),
    その他: getSelectedItem(data, 'その他'),
  } as ConfirmedCasesType
}
