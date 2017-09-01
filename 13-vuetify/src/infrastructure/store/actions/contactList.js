export const contactListActions = {
  addNewContactAction: ({ commit }) => commit('addNewContactMutation'),
  setNewNameAction: ({ commit }, newValue) => commit('setNewNameMutation', newValue),
  setNewPhoneAction: (store, newValue) => store.commit('setNewPhoneMutation', newValue),
};
