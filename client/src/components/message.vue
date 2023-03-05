<script setup lang="ts">
import {defineProps, watchEffect, ref, onMounted} from 'vue'

const prop = defineProps({
    name: {
        type: String
    },
    value: {
        type: String
    }
})
const dom = ref(null)
onMounted(() => {
    watchEffect(() => {
        dom.value.scrollIntoView()
    })
})

</script>
<template>
    <li ref="dom" class="flex flex-row mt-4">
        <div class="flex flex-shrink-0 pt-2 pr-2 items-start">
            123
        </div>
        <div class="bg-purple-100 rounded-xl px-4 py-2 flex-1 shadow-sm shadow-purple-200 text-purple-600">
            {{ value }}
        </div>
    </li>
</template>

<style scoped>
</style>