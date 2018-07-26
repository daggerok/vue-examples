<template>
  <ul>
    <li v-for="route in routes">
      <router-link :to="{ path: route.path }">

        {{route.label}} &nbsp;
      </router-link>
    </li>
  </ul>
</template>

<script>
  import { routes } from '../router';
  export default {
    name: 'links',
    data() {
      return { routes, };
    },
  };
</script>

<style scoped="">
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
  }
  a {
    color: grey;
    text-decoration: none;
  }
  /*
  see https://router.vuejs.org/en/api/options.html#linkexactactiveclass
  */
  .router-link-exact-active {
    text-decoration-style: solid;
    color: black;
  }
</style>
