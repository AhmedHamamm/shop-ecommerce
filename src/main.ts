import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Main style
import '@/styles/main.scss'

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Boxicons
import 'boxicons/css/boxicons.min.css'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const app = createApp(App)

app.use(router)

app.mount('#app')

console.log('Vue app mounted successfully')
