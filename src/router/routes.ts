import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/admin',
    component: () => import('layouts/SecondaryLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminIndex.vue') },
      { path: 'start', component: () => import('pages/IndexPage.vue') },
      { path: '404', component: () => import('pages/ErrorNotFound.vue') },
    ],
  },
  {
    path: '/drie',
    component: () => import('layouts/ThirdLayout.vue'),
    children: [
      { path: 'start', component: () => import('pages/IndexPage.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
