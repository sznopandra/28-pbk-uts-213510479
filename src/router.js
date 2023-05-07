
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/HomePage.vue'
import About from '@/components/AboutPage.vue'

const routes = [
{
path: '/',
name: 'home',
component: Home
},
{
path: '/about',
name: 'about',
component: About
},
]

const router = createRouter({
history: createWebHistory(),
routes
})

const app = createApp({})
app.use(router)

export default router
