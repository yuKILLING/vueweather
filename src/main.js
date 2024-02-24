import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import './assets/tailwind.css'
import directives from '@/directives'
const app = createApp(App)
directives.forEach(el=>{app.component(el.name, el)})

app
.use(store)
.mount('#app')

