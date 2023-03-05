<script setup lang="ts">
import { ref, computed } from 'vue'
import List from '@/components/list.vue'
import Input from '@/components/input.vue'

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
const getAnswer = (arr: any) => {
  return fetch('http://47.105.181.51:3000/message', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(arr)
  }).then(async stream => {
    const data = await stream.json()
    return data
  })
}
const onSubmit = (content: any) => {
  list.value.push({
    role: "user",
    content
  })
  isLoading.value = true
  getAnswer(list.value).then(res => {
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
  <div class="box-border w-full h-screen flex flex-col px-4 py-4 bg-gradient-to-bl from-purple-50 to-purple-100">
    <List :list="finalList" class="flex-1 pb-2 overflow-y-scroll"></List>
    <Input @onSubmit="onSubmit" :isLoading="isLoading" class="mt-2 basis-5"></Input>
  </div>
</template>