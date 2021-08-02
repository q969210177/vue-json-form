import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'About',
    // route level code-splitting src/views
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/index/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting src/views
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/login.vue'),
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting src/views
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/test/test'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
