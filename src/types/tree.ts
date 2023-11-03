export type DataType = 'folder' | 'file'

export type DataSetType = {
  id: number,
  type: DataType,
  name: string,
  files?: DataSetType[],
}
