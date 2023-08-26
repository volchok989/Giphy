import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import {createVuetify} from 'vuetify'
import {VSkeletonLoader} from 'vuetify/labs/VSkeletonLoader'
import router from "./router"

const vuetify = createVuetify({
    components: {
        VSkeletonLoader
    }
})

createApp(App).use(vuetify).use(router).mount('#app')
