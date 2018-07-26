# Vuex SPA: Counter + TODO

## jquery + materialize-css installation (using require instead of import)

### js

```html
<script>
  window.$ = window.jQuery = require('jquery');
  require('materialize-css');
  ...
  mounted () { // componentDidMount
    // activate material select
    $('select').material_select();
    // hello toast
    Materialize.toast('hi', 1000);
    // activate slidenav for mobile
    $('.button-collapse').sideNav();
  },
<script>
```

### css

```html
<style scoped="">
  @import '~material-design-icons/iconfont/material-icons.css';
  @import '~materialize-css/dist/css/materialize.min.css';
</style>
```

## Uni-directional data flow (like react flux / redux)

```
 a s y n c
  R E S T
   A P I
    ^|
    |v
  action -> mutation -> state -> vue component
     ^                                 |
     |                                 |
     +---------------------------------+
```

- state is mutable (Mutator function)
- on state change, vue will automatically knows which components require re-rendering
- disadvantage: you can't really use v-model on bit of application state
available commands

``` bash
yarn install
yarn dev
yarn build
yarn build --report
yarn deploy
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
