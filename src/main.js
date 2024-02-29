import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router' // import the router
import './index.css'

createApp(App)
  .use(router) // use the router
  .mount('#app')
