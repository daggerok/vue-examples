import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
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
    newTodo: '',
  },
  mutations: {
    decrementCounter: state => state.counter--,
    incrementCounter: state => state.counter++,
    toggleTodo: (state, todo) => {
      const toBeToggled = state.todoList.find(t => t.title === todo.title);
      toBeToggled.done = !toBeToggled.done;
    },
    addNewTodo: state => {
      if (!state.newTodo || !state.newTodo.trim().length) return;
      state.todoList = [
        {
          title: state.newTodo.trim(),
          done: false,
        },
        ...state.todoList,
      ];
      state.newTodo = '';
    },
    removeTodo: (state, todo) => {
      if (!todo.done && !confirm("TODO you going to delete wasn't complete, are you sure?")) return;
      state.todoList = [
        ...state.todoList
                .filter(t => t.title !== todo.title)
                .filter(t => t.done !== todo.done)
      ];
    },
    setNewTodo: (state, newValue) => {
      state.newTodo = newValue;
    },
  },
});

export default store;
