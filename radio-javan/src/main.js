import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js';
import '@/assets/css/tailwind.css'
import { createPinia } from 'pinia';
import 'sweetalert2/dist/sweetalert2.min.css';
import "@fontsource/montserrat";

const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');