import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
     {
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/Index'),
       children: [
         {
           name: 'Home',
           path: '/',
           component: () => import('@/views/home/Dashboard'),
         },
       ],
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '/',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Tables
        {
          name: 'Thông tin người đùng',
          path: 'users',
          component: () => import('@/views/dashboard/tables/UsersTable'),
        },
        {
          name: 'Thông tin ứng dụng',
          path: 'apps',
          component: () => import('@/views/dashboard/tables/AppsTable'),
        },
        {
          name: 'Thông tin câu hỏi và đán án',
          path: 'questions',
          component: () => import('@/views/dashboard/tables/QuestionsTable'),
        },
        {
          name: 'Thông tin điểm số',
          path: 'scores',
          component: () => import('@/views/dashboard/tables/ScoresTable'),
        },
        {
          name: 'Thông tin người chiến thắng',
          path: 'wins',
          component: () => import('@/views/dashboard/tables/WinsTable'),
        },
        // Pages
        /* {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        }, */
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },

      ],
      beforeEnter: (to, from, next) => {
        if (!store.getters.authenticated) {
          return next({
            path: '/login',
          })
        }
        return next()
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../src/views/dashboard/pages/Login'),
      beforeEnter: (to, from, next) => {
        if (store.getters.authenticated) {
          return next({
            path: '/admin',
          })
        }
        return next()
      },
    },
  ],
})
