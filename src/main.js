import { createApp } from 'vue'
import App from './App.vue'
import index from './router/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const app =createApp(App)
app.use(index)
app.mount('#app')
