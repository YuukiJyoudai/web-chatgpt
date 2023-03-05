<template>
    <div class="h-screen flex flex-col bg-gray-100">
        <div class="flex-1 overflow-y-auto p-6" ref="messagesContainer">
            <div v-for="(message, index) in messages" :key="index">
                <p class="text-gray-600 mb-2">{{ message.username }}</p>
                <p class="text-lg">{{ message.text }}</p>
            </div>
        </div>
        <div class="flex-shrink-0 py-4 px-6">
            <form @submit.prevent="sendMessage">
                <div class="flex">
                    <input v-model="messageInput" type="text"
                        class="flex-1 mr-4 py-2 px-4 rounded-lg bg-gray-200 focus:outline-none focus:shadow-outline"
                        placeholder="Type your message...">
                    <button type="submit"
                        class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg focus:outline-none focus:shadow-outline">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import { ref, watch, nextTick } from 'vue';

export default {
    setup() {
        const messages = ref([])
        const messageInput = ref("");
        const username = "Guest";
        const messagesContainer = ref(null);
        const len = ref(0)

        const sendMessage = () => {
            if (messageInput.value !== "") {
                messages.value.push({
                    username: username,
                    text: messageInput.value
                });
                messageInput.value = "";
            }
        };
        // 自动滚动到消息最底部
        watch(messages.value, () => {
            nextTick(() => {
                messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
            })
        })
        return {
            messages,
            messageInput,
            sendMessage,
            messagesContainer
        };
    }
};
</script>
  