import 'isomorphic-fetch'
import { ChatGPTAPI } from 'chatgpt'

const apiKey = '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'

const api = new ChatGPTAPI({
    apiKey
})

const res = await api.sendMessage('Hello World!')
console.log(res.text)