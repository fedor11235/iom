<template>
  <TreeItem
    class="item"
    v-for="child in threeStore.three"
    :key="child.id"
    :item="child"
  >
  </TreeItem>
</template>

<script lang="ts" setup>
import type { DataSetType } from '@/types/tree.ts'
import TreeItem from '@/components/TreeItem.vue'
import filesThree from '@/data/files.json'
import { useThreeStore } from '@/store'

const threeStore = useThreeStore()
threeStore.three = filesThree as DataSetType[]

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
