<script setup lang="ts">
import {defineProps} from 'vue'

defineProps({
    name: {
        type: String
    },
    value: {
        type: String
    }
})
</script>
<template>
    <li>
        {{ value }}
    </li>
</template>