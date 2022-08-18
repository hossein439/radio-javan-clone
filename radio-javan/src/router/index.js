import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/components/RegisterView.vue'
import Home from '@/components/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;