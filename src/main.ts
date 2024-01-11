import './assets/main.css'

import { createApp } from 'vue'
//@ts-ignore
import App from './App.vue'
import router from './router'
import theme from './theme'

//@ts-ignore
import store from '@/store';
import { createI18n } from "vue-i18n";
import uk from "./locales/uk.json";
import en from "./locales/en.json";
const i18n = createI18n({
    locale: localStorage.getItem('locale') || "en",
    fallbackLocale: "en",
    messages: { uk, en },
});

createApp(App).use(theme).use(router).use(store).use(i18n).mount('#app')