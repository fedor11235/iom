export type DataSetType = {
  type: 'dir' | 'file',
  name: string,
  files?: DataSetType,
}
