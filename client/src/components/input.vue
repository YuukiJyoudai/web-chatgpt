<script setup lang="ts">
import {ref, defineEmits, defineProps} from 'vue'
const props = defineProps({
    isLoading: Boolean
})
const msg = ref('')
const emits = defineEmits(['onSubmit'])
const sendMsg = () => {
    if (props.isLoading) {
        return
    }
    emits('onSubmit', msg.value)
    msg.value = ''
}
</script>
<template>
    <form @submit.prevent="sendMsg" class="min-w-full flex flex-row">
        <input v-model.trim="msg" class="flex-1 focus:outline-none mr-2 rounded-lg px-4 py-2 text-gray-600 shadow-emerald-300" />
        <button :disabled="isLoading" class="py-2 px-4 bg-emerald-400 text-white rounded-lg shadow-sm hover:bg-blue-400 disabled:bg-purple-300">发送</button>
    </form>
</template>