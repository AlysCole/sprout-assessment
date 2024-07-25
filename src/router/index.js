import { createRouter, createWebHistory } from 'vue-router'
import ManageAttendance from '../views/ManageAttendance.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'manage-attendance',
      component: ManageAttendance
    },
    {
      path: '/exported',
      name: 'exported',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExportedFiles.vue')
    }
  ]
})

export default router
