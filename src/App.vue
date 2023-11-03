<template>
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script lang="ts" setup>
import type { DataSetType } from '@/types/tree.ts'
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
