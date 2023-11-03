// Каждая ыункция обходит дерево и делает какое-то своё действие (удаление, добавление, и поиск элемент по айди, поиск максимального индекса)
// В идеале лучше сделать одну функцию для обхода дерева
import type { DataSetType, DataType } from '@/types/tree'

export function walkOnTreeMaxId (three: DataSetType[], idBig: number): number {
  for (const item of three) {
    if (idBig < item.id) {
      idBig = item.id
    }
    if (item.files && item.files.length > 0) {
      idBig = walkOnTreeMaxId(item.files, idBig)
    }
  }
  return idBig
}

export function walkOnTreeSearchId (three: DataSetType[], id: number): DataSetType | undefined {
  for (const item of three) {
    if (id === item.id) {
      return item
    }
    if (item.files && item.files.length > 0) {
      const itemChild = walkOnTreeSearchId(item.files, id)
      if (itemChild) {
        return itemChild
      }
    }
  }
}

export function walkOnTreeDeleteId (three: DataSetType[], id: number): DataSetType[] {
  return three.filter(item => {
    if (id !== item.id && item.files && item.files.length > 0) {
      item.files = walkOnTreeDeleteId(item.files, id)
      return item
    }
    return id !== item.id
  })
}

export function walkOnTreeAddId (
  three: DataSetType[],
  id: number,
  idItemLast: number,
  type: DataType
): void {
  for (const item of three) {
    if (id === item.id && item.files) {
      if (type === 'file') {
        item.files.push({
          id: ++idItemLast,
          type: 'file',
          name: 'Новый файл'
        })
      } else if (type === 'folder') {
        item.files.push({
          id: ++idItemLast,
          type: 'folder',
          name: 'Новая папка',
          files: []
        })
      }
    }
    if (item.files && item.files.length > 0) {
      walkOnTreeAddId(item.files, id, idItemLast, type)
    }
  }
}
