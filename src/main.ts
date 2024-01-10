import './assets/main.css'

import { createApp } from 'vue'
//@ts-ignore
import App from './App.vue'
import router from './router'
import theme from './theme'

//@ts-ignore
import store from '@/store';

createApp(App).use(theme).use(router).use(store).mount('#app')