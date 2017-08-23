import Vue from 'vue';
import Router from 'vue-router';
import MaterializeCss from '../components/MaterializeCss.vue';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    name: 'MaterializeCss',
    component: MaterializeCss,
    label: 'using Vue.js + materialize-css + jquery',
  },
];

const router = new Router({
  routes,
});

export default router;
