import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from '../components/VueMaterial.vue';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'VueMaterial',
    component: VueMaterial,
    label: 'using Vue.js + vue-materialize-css + jquery',
  },
];

const router = new Router({
  routes,
});

export default router;
