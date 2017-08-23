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
    newTodoTitle: '',
  },
  mutations: {
    decrementCounter: state => state.counter--,
    incrementCounter: state => state.counter++,
    toggleTodo: (state, todo) => {
      const toBeToggled = state.todoList.find(t => t.title === todo.title);
      toBeToggled.done = !toBeToggled.done;
    },
    addNewTodoTitle: state => {
      if (!state.newTodoTitle || !state.newTodoTitle.trim().length) return;
      const foundTodo = state.todoList.find(t => t.title === state.newTodoTitle);
      if (foundTodo) return;
      state.todoList = [
        {
          title: state.newTodoTitle.trim(),
          done: false,
        },
        ...state.todoList,
      ];
      state.newTodoTitle = '';
    },
    removeTodo: (state, todo) => {
      if (!todo.done && !confirm("TODO you going to delete wasn't complete, are you sure?")) return;
      state.todoList = [
        ...state.todoList.filter(t => t.title !== todo.title)
      ];
    },
    setNewTodoTitle: (state, newValue) => {
      state.newTodoTitle = newValue;
    },
  },
});

export default store;
