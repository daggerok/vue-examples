import Vue from 'vue';
import Vuex from 'vuex';
import {
  addNewContact,
  addNewTodoTitle,
  decrementCounter,
  incrementCounter,
  removeTodo,
  setNewName,
  setNewPhone,
  setNewTodoTitle,
  toggleTodo
} from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
    //
    todoList: [
      {
        title: 'Complete task',
        done: true,
      },
      {
        title: 'Incomplete task',
        done: false,
      },
    ],
    newTodoTitle: '',
    //
    contactList: [
      {
        name: 'Max',
        phone: '+380933495900',
      },
      {
        name: 'Ahtung!',
        phone: '02',
      },
      {
        name: 'Help',
        phone: '911',
      },
    ],
    newName: '',
    newPhone: '',
  },
  mutations: {
    decrementCounter,
    incrementCounter,
    //
    toggleTodo,
    addNewTodoTitle,
    removeTodo,
    setNewTodoTitle,
    //
    setNewName,
    setNewPhone,
    addNewContact,
  },
});

export default store;
