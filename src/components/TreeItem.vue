<template>
  <div class="tree-item">
    <input
      v-if="isEdit"
      :value="name"
      @input="handlerEditName"
      @blur="isEdit = false"
      class="tree-item__input"
    />
    <div v-else @click="isEdit = true" class="tree-item__name">
      {{ item.name }}
    </div>
    <div class="tree-item__menu">
      <div v-if="item.type === 'folder'" @click="handlerAddNewItem('file')" class="tree-item__control">Добавить файл +</div>
      <div v-if="item.type === 'folder'" @click="handlerAddNewItem('folder')" class="tree-item__control">Добавить папку +</div>
      <div v-if="item.type === 'folder'" @click="isOpen = !isOpen" class="tree-item__control">{{isOpen? '↑': '↓'}}</div>
      <img class="tree-item__img" width="20" height="16" :src="require(`@/assets/icons/${item.type}.png`)" />
      <img
        @click="handlerDelete"
        class="tree-item__img tree-item__delete"
        width="20"
        height="16"
        src="@/assets/icons/trash.png"
      />
    </div>
  </div>
  <div v-if="item.type === 'folder' && isOpen"  class="tree-item__child">
    <TreeItem
      v-for="child in item.files"
      :key="child.id"
      :item="child"
    />
  </div>
</template>

<script lang="ts" setup>
import type { DataType } from '@/types/tree'
import { ref, toRef } from 'vue'
import { useThreeStore } from '@/store'

const threeStore = useThreeStore()

const isEdit = ref(false)
const isOpen = ref(false)

const props = defineProps<{
  item: any
}>()

const name = toRef(props.item.name)

function handlerEditName (event: Event) {
  threeStore.ItemEditName(props.item.id, (event.target as HTMLInputElement).value)
}

function handlerAddNewItem (dataType: DataType) {
  isOpen.value = true
  threeStore.ItemAdd(props.item.id, dataType)
}

function handlerDelete () {
  threeStore.ItemDelete(props.item.id)
}
</script>

<style lang="scss" scoped>
.tree-item {
  display: flex;
  justify-content: space-between;
  background-color: #a0a0a0;
  margin: 4px 0;
  padding: 4px 16px;
  &__input {
    border: none;
    outline: none;
  }
  &__name {
    color: white;
  }
  &__menu {
    display: flex;
    column-gap: 12px;
  }
  &__img {
    object-fit: contain;
  }
  &__delete {
    cursor: pointer;
  }
  &__control {
    user-select: none;
    color: black;
    cursor: pointer;
  }
  &__child {
    width: 99%;
    margin-left: 1%;
  }
}
</style>
