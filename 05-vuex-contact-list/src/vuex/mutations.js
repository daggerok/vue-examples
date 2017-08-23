/* Counter App */
export const decrementCounter = state => state.counter--;

export const incrementCounter = state => state.counter++;

/* TO DO  App */
export const toggleTodo = (state, todo) => {
  const toBeToggled = state.todoList.find(t => t.title === todo.title);
  toBeToggled.done = !toBeToggled.done;
};

export const addNewTodoTitle = state => {
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

export const removeTodo = (state, todo) => {
  if (!todo.done && !confirm("TODO you going to delete wasn't complete, are you sure?")) return;
  state.todoList = [
    ...state.todoList.filter(t => t.title !== todo.title)
  ];
};

export const setNewTodoTitle = (state, newValue) => {
  state.newTodoTitle = newValue;
};

/* Contact App */
export const setNewName = (state, newValue) => {
  state.newName = newValue;
};

export const setNewPhone = (state, newValue) => {
  state.newPhone = newValue;
};

export const addNewContact = state => {
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
