import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import el from '@/form/index'
// import { installFunc } from '@/utils/installCompoent'
import '@/utils/utils'
const app = createApp(App)
// installFunc(app)
app.use(el)
// src\assets\scss\reset.scss
import '@/assets/scss/reset.scss'
app.use(store).use(router).mount('#app')
