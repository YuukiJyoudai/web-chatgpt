<script setup lang="ts">
import {ref} from 'vue'
import List from '@/components/list.vue'
import Input from '@/components/input.vue'

const list = ref([
  {
    name: 1,
    value: 1
  }, {
    name: 2,
    value: 2
  }
])

const onSubmit = (value: any) => {
  console.log('子组件传入的值', value)
  list.value.push({
    name: 1,
    value
  })
}
</script>

<template>
  <div class="container min-h-screen min-w-full bg-slate-500 flex flex-col px-4 py-4">
    <List :list="list" class="flex-1"></List>
    <Input @onSubmit="onSubmit" class="basis-5"></Input>
  </div>
</template>