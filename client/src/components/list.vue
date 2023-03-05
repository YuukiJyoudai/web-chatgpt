<script setup lang="ts">
import {defineProps} from 'vue'
import Message from './message.vue'

defineProps({
    list: {
        type: Array as any
    }
})
</script>

<template>
    <ul>
        <Message v-for="item in list"
            :name="item.name"
            :value="item.value"></Message>
    </ul>
</template>