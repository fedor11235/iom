<template>
  <div class="tree-item">
    <div class="tree-item__name">{{ item.name }}</div>
    <div class="tree-item__menu">
      <div v-if="item.type === 'folder'" class="tree-item__plus">+</div>
      <img class="tree-item__img" width="32" height="16" :src="require(`@/assets/icons/${item.type}.png`)" />
    </div>
  </div>
  <div v-if="item.type === 'folder'"  class="tree-item__child">
    <TreeItem v-for="(child, index) in item.files" :key="index" :item="child" />
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  item: any
}>()

</script>

<style scoped>
.tree-item {
  display: flex;
  justify-content: space-between;
  background-color: #a0a0a0;
  margin: 4px 0;
  padding: 4px 16px;
}
.tree-item__name {
  color: white;
}
.tree-item__menu {
  display: flex;
  column-gap: 12px;
}
.tree-item__img {
  object-fit: contain;
}
.tree-item__plus {
  color: black;
  cursor: pointer;
}
.tree-item__child {
  width: 99%;
  margin-left: 1%;
}
</style>
