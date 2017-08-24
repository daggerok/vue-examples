export const todoActions = {
  toggleTodoAction(store, todo) {
    store.commit('toggleTodoMutation', todo);
  },
  addNewTodoTitleAction(store) {
    store.commit('addNewTodoTitleMutation');
  },
  removeTodoAction(store, todo) {
    store.commit('removeTodoMutation', todo);
  },
  setNewTodoTitleAction(store, newValue) {
    store.commit('setNewTodoTitleMutation', newValue);
  }
};
