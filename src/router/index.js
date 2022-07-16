import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
    path: '/cashes',
      name: 'cashes.index',
      component: () => import(/* webpackChunkName: "cashes" */ '../views/cashes/Index.vue'),
      meta: { auth: true }
    },
    {
      path: '/cashes/:slug',
      name: 'cashes.show',
      component: () => import(/* webpackChunkName: "show" */ '../views/cashes/Show.vue'),
      meta: { auth: true }
    }, 
    {
      path: '/cashes/edit/:slug',
      name: 'cashes.edit',
      component: () => import( /* webpackChunkName: "edit" */ '../views/cashes/Edit.vue')
    },
    {
    path: '/activities',
      name: 'activities.index',
      component: () => import(/* webpackChunkName: "activities" */ '../views/activities/Index.vue'),
      meta: { auth: true }
    },
    {
      path: '/activities/:id',
      name: 'activities.show',
      component: () => import(/* webpackChunkName: "show" */ '../views/activities/Show.vue'),
      meta: { auth: true }
    },
    {
      path: '/activities/edit/:id',
      name: 'activities.edit',
      component: () => import( /* webpackChunkName: "edit" */ '../views/activities/Edit.vue'),
      meta: { auth: true }
    },
    {
    path: '/learns',
      name: 'learns.index',
      component: () => import(/* webpackChunkName: "learns" */ '../views/learns/Index.vue'),
      meta: { auth: true }
    },
    {
      path: '/learns/:id',
      name: 'learns.show',
      component: () => import(/* webpackChunkName: "show" */ '../views/learns/Show.vue'),
      meta: { auth: true }
    },
    {
      path: '/learns/edit/:id',
      name: 'learns.edit',
      component: () => import( /* webpackChunkName: "edit" */ '../views/learns/Edit.vue'),
      meta: { auth: true }
    },
    {
      path: '/targets',
      name: 'targets.index',
      component: () => import(/* webpackChunkName: "targets" */ '../views/targets/Index.vue'),
      meta: { auth: true }
    },
    {
      path: '/targets/:id',
      name: 'targets.show',
      component: () => import(/* webpackChunkName: "show" */ '../views/targets/Show.vue'),
      meta: { auth: true }
    },
    {
      path: '/targets/edit/:id',
      name: 'targets.edit',
      component: () => import( /* webpackChunkName: "edit" */ '../views/targets/Edit.vue'),
      meta: { auth: true }
    },
    {
      path: '/dreams',
      name: 'dreams.index',
      component: () => import(/* webpackChunkName: "dreams" */ '../views/dreams/Index.vue'),
      meta: { auth: true }
    },
    {
      path: '/dreams/:id',
      name: 'dreams.show',
      component: () => import(/* webpackChunkName: "show" */ '../views/dreams/Show.vue'),
      meta: { auth: true }
    },
    {
      path: '/dreams/edit/:id',
      name: 'dreams.edit',
      component: () => import( /* webpackChunkName: "edit" */ '../views/dreams/Edit.vue'),
      meta: { auth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
      meta: { guest: true }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ '../views/auth/Register.vue'),
      meta: { guest: true }
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'bg-blue-500 rounded-lg text-white'
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters['auth/authenticated']) router.push('/login')
  if (to.meta.guest && store.getters['auth/authenticated']) router.push('/')

  next()
})

export default router
