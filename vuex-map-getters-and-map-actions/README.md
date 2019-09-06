# Using vuex mapGetters for computed and mapActions for methods

### component

```html
<template>
  <div>
    <h3>Counter App</h3>
    <p>{{ counter }}</p>
    <button @click="decrementCounterAction()"> - </button>
    <button @click="incrementCounterAction()"> + </button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  //
  export default {
    name: 'counter-component',
    computed: mapGetters([
      'counter',
    ]),
    methods: mapActions([
      'decrementCounterAction',
      'incrementCounterAction',
    ]),
  };
</script>
```

### store.js

```javascript
// ...
import { state } from './state.js';
import { getters } from './getters.js';
import { mutations } from './mutations.js';
import { actions } from './actions.js';
// ...
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
```

### state.js

```javascript
export const state = {
  counter: 0,
};
```

### getters.js

```javascript
export const getters = {
  counter: state => state.counter,
};
```

### mutations.js

```javascript
export const actions = {
   decrementCounterMutation: state => state.counter--,
   incrementCounterMutation: state => state.counter++,
};
```

### actions.js

```javascript
export const actions = {
  decrementCounterAction: ({ commit }) => commit('decrementCounterMutation'),
  incrementCounterAction: ({ commit }) => commit('incrementCounterMutation'),
};
```

## build and run

``` bash
yarn install
yarn dev
yarn build
yarn build --report
yarn deploy
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
