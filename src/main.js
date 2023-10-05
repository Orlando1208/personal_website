import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'animate.css';
import router from './router/index'
import axios from 'axios'
const app = createApp(App)
import store from './store/index'
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus)
app.use(router)
app.provide('$axios',axios)
app.config.productionTip = false;
app.mount('#app')