import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Supermarket from '@/components/Supermarket'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
    	path: '/home',
    	name: 'home',
    	component: Home
    },{
    	path: '/supermarket',
    	name: 'supermarket',
    	component: Supermarket
    },{
    	path: '/cart',
    	name: 'cart',
    	component:Cart
    },{
    	path: '/mine',
    	name: 'mine',
    	component:Mine
    }
  ]
})
