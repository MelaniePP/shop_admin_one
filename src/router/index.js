import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

// 导航守卫
router.beforeEach((to, from, next) => {
  // 每一次路由跳转之前都会执行该函数
  let token = localStorage.getItem('token')
  // console.log(to)
  if (to.path === '/login') {
    next()
    return
  }
  if (token) {
    next()
  } else {
    next('/login')
    console.log('asdfsadf')
  }
})

export default router
