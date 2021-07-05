import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import el from '@/form/index';
import '@/utils/utils';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App);
app.use(el);
app.use(Antd);
import test from '@/views/index/components/test';
el.component(test.name, test);
// src\assets\scss\reset.scss
import '@/assets/scss/reset.scss';
app.use(store).use(router).mount('#app');
