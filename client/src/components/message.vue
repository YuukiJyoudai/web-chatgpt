<script setup lang="ts">
import {defineProps, watchEffect, ref, nextTick, computed} from 'vue'

const props = defineProps({
    role: {
        type: [String, Number]
    },
    content: {
        type: [String, Number]
    }
})
const isUser = computed(() => {
    return props.role === "user"
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
        <div class="text-xs tracking-wide bg-purple-100 rounded-xl mx-2 px-4 py-2 flex-1 shadow-sm shadow-purple-200 text-purple-600">
            {{ content }}
        </div>
    </li>
</template>