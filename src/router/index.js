// 全局样式
import '../css/site.css'
import '../css/index.css'
import 'swiper/dist/css/swiper.min.css'

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import classify from '@/components/classify'
import cart from '@/components/cart'
import me from '@/components/me'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/classify ',
      name: 'classify ',
      component: classify
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})
