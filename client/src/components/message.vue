<script setup lang="ts">
import { defineProps, watchEffect, ref, nextTick, computed } from 'vue'
import Prism from 'prismjs'

const props = defineProps({
    role: {
        type: [String, Number]
    },
    content: {
        type: [String]
    }
})
const isUser = computed(() => {
    return props.role === "user"
})

function convertCodeBlockToHTML(text: any) {
  const pattern = /```(\w+)?\s?([^`]+)```/g;
  const codeText = text.replace(pattern, (match: any, p1: any, p2: any) => {
    const language = p1 ? ` class="language-${p1}"` : '';
    p2 = Prism.highlight(p2, Prism.languages[p1], p1)
    return `<pre${language}><code>${p2}</code></pre>`;
  });
  return codeText;
}


// 这里解析一下
const resultMsg = computed(() => {
    console.log('打印一下原来的内容', props.content)
    return convertCodeBlockToHTML(props.content)
})
const dom = ref(null)
watchEffect(() => {
    nextTick(() => {
        dom.value.scrollIntoView()
    })
})

</script>
<template>
    <li ref="dom" class="flex flex-row mt-4" :class="{
        'flex-row-reverse': isUser
    }">
        <div class="flex flex-shrink-0 items-start">
            <svg-icon class="w-8 h-8 text-purple-400" :name="isUser ? 'me2' : 'am'"></svg-icon>
        </div>
        <div class="bg-purple-100 rounded-xl mx-2 px-4 py-2 flex-1  shadow-sm shadow-purple-200 text-purple-600 overflow-hidden">
            <div class="self-code" v-html="resultMsg"></div>
        </div>
    </li>
</template>
<style>
.self-code * {
    white-space: pre-wrap;
}
</style>