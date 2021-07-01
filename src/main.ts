import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plu from '@/components/form'
const app = createApp(App)
app.use(plu,{ name:'111' })

// src\assets\scss\reset.scss
import '@/assets/scss/reset.scss'
app.use(store).use(router).mount('#app')
