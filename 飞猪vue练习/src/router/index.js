import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Discover from '@/components/Discover'
import Bourn from '@/components/Bourn'
import Route from '@/components/Route'
import Mine from '@/components/Mine'
import Details from '@/components/Details'

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
    	component:Home
    },{
    	path: '/search',
    	name: 'search',
    	component: Search
    },{
    	path: '/discover',
    	name: 'discover',
    	component: Discover
    },{
    	path: '/bourn',
    	name: 'bourn',
    	component: Bourn
    },{
    	path: '/route',
    	name: 'route',
    	component: Route
    },{
    	path: '/mine',
    	name: 'mine',
    	component: Mine
    },{
    	path: '/details',
    	name: 'details',
    	component: Details
    }
  ]
})
