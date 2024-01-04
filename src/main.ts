import './assets/main.css'

import { createApp } from 'vue'
//@ts-ignore
import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';

//@ts-ignore
import store from '@/store';

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).use(router).use(store).mount('#app')