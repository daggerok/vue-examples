import Vue from 'vue';
import Router from 'vue-router';
import TodoApp from '../components/TodoApp.vue';
import Counter from '../components/Counter.vue';
import ContactList from '../components/ContactList.vue';
import FirebaseApp from '../components/FirebaseApp.vue';

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
    path: '/',
    name: 'FirebaseApp',
    component: FirebaseApp,
    label: 'Firebase App',
  },
  {
    path: '/contact-list',
    name: 'ContactList',
    component: ContactList,
    label: 'Contact List App',
  },
  {
    path: '/todo-app',
    name: 'TodoApp',
    component: TodoApp,
    label: 'TODO App',
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
    label: 'Counter App',
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
});

export default router;
