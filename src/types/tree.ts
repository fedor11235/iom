export type DataSetType = {
  type: 'folder' | 'file',
  name: string,
  files?: DataSetType,
}
