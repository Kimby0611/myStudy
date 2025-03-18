import { createRouter, createWebHistory } from 'vue-router'
import Test from '@/components/test.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import List_event from '@/components/list_event.vue'
import NextVue from '@/components/nextVue.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'testComponent',
    component: Test
  },
  {
    path: '/list_event',
    name: 'list_event',
    component: List_event
  },
  {
    path: '/nextvue',
   
    component: NextVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
