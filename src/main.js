import {createApp} from 'vue'
import {Quasar} from 'quasar'
import {createPinia} from 'pinia'
import App from './App.vue'
import Router from './router'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './styles/style.css'

const pinia = createPinia()

const app = createApp(App)
app.use(Router)
app.use(pinia)
app.use(Quasar)
app.mount('#app')
