import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/home.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('./components/table/c-table.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/test/test.vue')
    },
    {
      path: '/origin-table',
      name: 'origin-table',
      component: () => import('./views/test/origin-table.vue')
    },
    {
      path: '/iscroll-table-test',
      name: 'iscroll-table-test',
      component: () => import('./views/test/iscroll-table.vue')
    },
    {
      path: '/profession',
      name: 'profession',
      component: () => import('./views/test/profession.vue')
    },
    {
      path: '/popup',
      name: 'popup',
      component: () => import('./views/test/popup.vue')
    },
    {
      path: '/range-dev',
      name: 'range-dev',
      component: () => import('./components/range/c-range.vue')
    },
    {
      path: '/range-demo',
      name: 'range-demo',
      component: () => import('./components/range/range-demo.vue')
    },
    {
      path: '/table-demo',
      name: 'table-demo',
      component: () => import('./components/table/table-demo.vue')
    }
  ]
})
