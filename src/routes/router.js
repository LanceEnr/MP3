import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users.vue'
import UserSubmissions from '../views/UserSubmissions.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/',
      name: 'user-submissions',
      component: UserSubmissions
    }
  ]
})

export default router
