import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import instruction from '../components/instruction.vue'
import resource from '../components/resource.vue'
import reserve from '../components/reserve.vue'
import about from '../components/about.vue'

const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/instruction',
    component: instruction,
  },
  {
    path: '/resource',
    component: resource,
    children:[
      {
        path: 'art',
        component:() => import("../components/resource/art.vue")
      },
      {
        path: 'carpentry',
        component:() => import("../components/resource/carpentry.vue")
      },
      {
        path: 'electronic',
        component:() => import("../components/resource/electronic.vue")
      },
      {
        path: 'falab',
        component:() => import("../components/resource/falab.vue")
      },
    ],
  },
  {
    path: '/reserve',
    component: reserve
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("../components/404.vue")
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
