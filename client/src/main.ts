import { createApp } from 'vue'
import '@/assets/style.css'
import App from './App.vue'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/svg-icon.vue'

createApp(App)
    .component('svg-icon', SvgIcon)
    .mount('#app')
