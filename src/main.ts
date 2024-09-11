import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css'

import Aos from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const app = createApp(App)
app.use(router)
app.mount('#app')

Aos.init();

gsap.registerPlugin(ScrollTrigger);





