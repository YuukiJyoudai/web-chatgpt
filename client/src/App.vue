<script setup lang="ts">
import { ref, computed } from 'vue'
import List from '@/components/list.vue'
import Input from '@/components/input.vue'
import {sendMsg} from './api'

interface Msg {
  role: string,
  content: string
}
interface MsgArr {
  [index: number]: Msg,
  concat: any,
  push: any
}
const defaultList = ref<MsgArr>([
  {
    role: 'assistant',
    content: '你好，我可以为你做什么？'
  }
])
const isLoading = ref(false)
const list = ref<MsgArr>([])
const finalList = computed(() => {
  return defaultList.value.concat(list.value)
})
const onSubmit = (content: any) => {
  list.value.push({
    role: "user",
    content
  })
  isLoading.value = true
  sendMsg(list.value).then((res: any) => {
    list.value.push({
      role: "assistant",
      content: res.data
    })
  }).finally(() => {
    isLoading.value = false
  })
}
</script>

<template>
  <div class="self-wrap box-border w-full h-full flex flex-col px-4 py-4 bg-gradient-to-bl from-purple-50 to-purple-100">
    <List :list="finalList" class="flex-1 pb-2"></List>
    <Input @onSubmit="onSubmit" :isLoading="isLoading" class="mt-2 basis-5"></Input>
  </div>
</template>

<style scoped>
.self-wrap {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
}
</style>