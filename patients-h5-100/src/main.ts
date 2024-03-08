import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import persist from 'pinia-plugin-persistedstate'
import pinia from './stores'
// 样式全局使用
import 'vant/lib/index.css'
import './styles/main.scss'

const app = createApp(App)
app.use(createPinia().use(persist));
app.use(router)
app.use(pinia)
app.mount('#app')
