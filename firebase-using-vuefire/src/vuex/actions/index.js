import { counterActions } from './counter';
import { todoActions } from './todo';
import { contactListActions } from './contactList';

export const actions = Object.assign(
  {}, counterActions, todoActions, contactListActions,
);
