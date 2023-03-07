import { createApp } from 'vue'
import '@/assets/style.css'
import App from './App.vue'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/svg-icon.vue'
// import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-okaidia.css'

const app = createApp(App)

app.component('svg-icon', SvgIcon)
app.mount('#app')
