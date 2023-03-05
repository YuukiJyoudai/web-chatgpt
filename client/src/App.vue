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
    value: '子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值'
  }, {
    name: 1,
    value: 'hhhh'
  }, {
    name: 2,
    value: '子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值'
  }, {
    name: 1,
    value: '子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值子组件传入的值'
  }, {
    name: 2,
    value: '发我哦浪费就完了附件为'
  }, {
    name: 3,
    value: 'god'
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
  <div class="box-border w-full h-screen flex flex-col px-4 py-4 bg-gradient-to-bl from-purple-50 to-purple-100">
    <List :list="list" class="flex-1 pb-2 overflow-y-scroll"></List>
    <Input @onSubmit="onSubmit" class="mt-2 basis-5"></Input>
  </div>
</template>