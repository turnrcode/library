import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/login',
    name: 'log in',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
  },
  {
    path: '/signup',
    name: 'sign up',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
  path: '/categories',
  name: 'categories',
  component: () => import('../views/Categories.vue')
  },
  {
  path: '/computer-engineering',
  name: 'CompEngr',
  component: () => import('../views/categories/CompEngr.vue')
  },
  {
  path: '/mechanical-engineering',
  name: 'MechEngr',
  component: () => import('../views/categories/MechEngr.vue')
  },
  {
  path: '/electrical-engineering',
  name: 'ElectEngr',
  component: () => import('../views/categories/ElectEngr.vue')
  },
  {
  path: '/vocational',
  name: 'Vocational',
  component: () => import('../views/categories/Vocational.vue')
  },
  {
  path: '/general-knowledge',
  name: 'GenKnowledge',
  component: () => import('../views/categories/GenKnowledge.vue')
  },
  {
  path: '/english',
  name: 'English',
  component: () => import('../views/categories/English.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
