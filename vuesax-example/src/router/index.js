import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuesax from '../views/Vuesax.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'vuesax',
    // component: Vuesax,
    component: () => import(/* webpackChunkName: "about" */ '../views/Vuesax.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
