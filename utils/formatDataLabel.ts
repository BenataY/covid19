type DataType = {
  value: number
  sub1?: number
  sub2?: number
  start?: string
  end?: string
}

export type LabelDataType = {
  タイトル: string
  サブタイトル?: string
  値: string
  単位?: string
  補足分子?: string
  補足分母?: string
  補足単位?: string
  開始日時?: string
  終了日時?: string
  注釈?: string
}

export default (data: DataType[]) => {

}
