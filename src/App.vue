<template>
  <TreeItem
    class="item"
    v-for="(child, index) in threeStore.three"
    :key="index"
    :item="child"
  >
  </TreeItem>
  <!-- @make-folder="$emit('make-folder', $event)"
    @add-item="$emit('add-item', $event)" -->
  <!-- :type="child.type"
    :name="child.name" -->
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
