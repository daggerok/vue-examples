import Vue from 'vue';
import Router from 'vue-router';
import App from '../components/App.vue';
import VuetifyApp from '../components/VuetifyApp.vue';

Vue.use(Router);

const meta = {
  progress: {
    func: [
      { call: 'color', modifier: 'temp', argument: 'rgb(143, 255, 199)', },
      { call: 'fail', modifier: 'temp', argument: '#6e0000' },
      { call: 'location', modifier: 'temp', argument: 'top' },
      { call: 'transition', modifier: 'temp', argument: { speed: '1.5s', opacity: '0.6s', termination: 400 }, },
    ],
  },
};

export const routes = [
  {
    path: '',
    name: 'App',
    component: App,
    label: 'App',
  },
  {
    path: '/app',
    name: 'VuetifyApp',
    component: VuetifyApp,
    label: 'Vuetify App',
  },
  {
    path: '/**',
    redirect: '/',
  },
].map(r => {
  r.meta = meta;
  return r;
});

const router = new Router({
  routes,
  mode: 'history',
});

export default router;
