/**
 * Counter App
 */
export const decrementCounterMutation = state => state.counter--;

export const incrementCounterMutation = state => state.counter++;

/**
 * TO DO App
 */
export const toggleTodoMutation = (state, todo) => {
  const toBeToggled = state.todoList.find(t => t.title === todo.title);
  toBeToggled.done = !toBeToggled.done;
};

export const addNewTodoTitleMutation = state => {
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
};

export const removeTodoMutation = (state, todo) => {
  if (!todo.done && !confirm("TODO you going to delete wasn't complete, are you sure?")) return;
  state.todoList = [
    ...state.todoList.filter(t => t.title !== todo.title)
  ];
};

export const setNewTodoTitleMutation = (state, newValue) => {
  state.newTodoTitle = newValue;
};

/**
 * Contact App
 */
export const setNewNameMutation = (state, newValue) => {
  state.newName = newValue;
};

export const setNewPhoneMutation = (state, newValue) => {
  state.newPhone = newValue;
};

export const addNewContactMutation = state => {
  if (!state.newName || !state.newName.trim().length || !state.newPhone || !state.newPhone.trim().length) {
    Materialize.toast('name and phone may not be empty.', 10000);
    return;
  }
  const foundContact = state.contactList.find(c => c.name === state.newName || c.phone === state.newPhone);
  if (foundContact) {
    Materialize.toast('contact with such name or phone already exists.', 10000);
    return;
  }
  state.contactList.push({ name: state.newName, phone: state.newPhone });
  state.contactList.sort((a, b) => a.phone - b.phone);
  Materialize.toast(`contact ${state.newName} successfully added!`, 5000);
  state.newName = state.newPhone = '';
};

export const mutations = {
  decrementCounterMutation,
  incrementCounterMutation,
  //
  toggleTodoMutation,
  addNewTodoTitleMutation,
  removeTodoMutation,
  setNewTodoTitleMutation,
  //
  setNewNameMutation,
  setNewPhoneMutation,
  addNewContactMutation,
};
