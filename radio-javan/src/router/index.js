import { createRouter, createWebHistory } from 'vue-router'

import Register from '@/components/RegisterView.vue'
import LogIn from '@/components/LoginView.vue'
import Home from '@/components/HomeView.vue'
import Songs from '@/songs/SongView.vue'
import SongCreate from '@/songs/SongCreate.vue'
import SingleSong from '@/songs/SingleSong.vue'
import SongEdit from '@/songs/SongEdit.vue'
import RadioJavan from '@/radio-javan/RadiojavanView.vue';



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
    },
    {
        path: '/login',
        name: 'login',
        component: LogIn
    },
    {
        path: '/song',
        name: 'songs',
        component: Songs
    },
    {
        path: '/song/create',
        name: 'song-create',
        component: SongCreate
    },
    {
        path: '/song/:id',
        name: 'single-song-view',
        component: SingleSong
    },
    {
        path: '/song/:id/edit',
        name: 'song-edit',
        component: SongEdit
    },
    {
        path: '/song/radio-javan',
        name: 'radio-javan',
        component: RadioJavan
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;