<template>
  <ul>
    <li v-for="l in links">
      <router-link :to="{ path: l.to }">

        {{l.label}} &nbsp;
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'links',
    data() {
      return {
        links: [
          {
            to: '/',
            label: 'Home',
          },
          {
            to: '/todo-app',
            label: 'TODO App',
          },
        ],
      };
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
