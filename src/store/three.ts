import { ThreeStoreType } from '@/types/store'
import { defineStore } from 'pinia'

export const useThreeStore = defineStore('three', {
  state: (): ThreeStoreType => ({
    three: []
  })
})
