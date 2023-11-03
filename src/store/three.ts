import type { ThreeStoreType } from '@/types/store'
import type { DataType } from '@/types/tree'
import {
  walkOnTreeMaxId,
  walkOnTreeSearchId,
  walkOnTreeAddId,
  walkOnTreeDeleteId
} from '@/untils/three'
import { defineStore } from 'pinia'

export const useThreeStore = defineStore('three', {
  state: (): ThreeStoreType => ({
    three: []
  }),
  getters: {
    maxId: (state) => {
      return walkOnTreeMaxId(state.three, 0)
    }
  },
  actions: {
    ItemEditName (id: number, name: string) {
      const item = walkOnTreeSearchId(this.three, id)
      if (item) {
        item.name = name
      }
    },
    ItemAdd (id: number, type: DataType) {
      walkOnTreeAddId(this.three, id, this.maxId, type)
    },
    ItemDelete (id: number) {
      const newThree = walkOnTreeDeleteId(this.three, id)
      this.three = newThree
    }
  }
})
