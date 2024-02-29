import Vue from 'vue'
import Router from 'vue-router'
import Users from './views/Users.vue'
import UserSubmissions from './views/UserSubmissions.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/user-submissions',
      name: 'user-submissions',
      component: UserSubmissions
    }
  ]
})
