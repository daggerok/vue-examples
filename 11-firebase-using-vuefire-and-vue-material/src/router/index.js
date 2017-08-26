import Vue from 'vue';
import Router from 'vue-router';
import TodoApp from '../components/TodoApp.vue';
import Counter from '../components/Counter.vue';
import ContactList from '../components/ContactList.vue';
import FirebaseApp from '../components/FirebaseApp.vue';

Vue.use(Router);

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
];

const router = new Router({
  routes,
});

export default router;
