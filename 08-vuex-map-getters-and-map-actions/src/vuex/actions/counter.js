export const counterActions = {
  decrementCounterAction: ({ commit }) => {
    commit('decrementCounterMutation');
  },
  incrementCounterAction: store => store.commit('incrementCounterMutation'),
};
