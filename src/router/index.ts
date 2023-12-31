import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/uglify',
      name: 'uglify',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UglifyJS.vue')
    },
    {
      path: '/sql',
      name: 'sql',
      component: () => import('../views/Sql.vue')
    },
    {
      path: '/json',
      name: 'json',
      component: () => import('../views/Json.vue')
    }
  ]
})

export default router
