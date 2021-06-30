import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// src\assets\scss\reset.scss
import '@/assets/scss/reset.scss'
createApp(App).use(store).use(router).mount('#app')
