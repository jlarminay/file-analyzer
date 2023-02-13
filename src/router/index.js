import {createRouter, createWebHistory} from 'vue-router'

import pages from './pages.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...pages,
    {path: '/:pathMatch(.*)*', redirect: '/error'}
  ]
})

export default router
