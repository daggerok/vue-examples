<template>
  <md-toolbar>
    <h2 class="md-title" style="flex: 1">Vue.js</h2>

    <router-link v-for="(route, index) in routes" :key="index" :to="{ path: route.path }">
      <md-button :class="[randomClass]">
        <span class="label">{{route.label}} &nbsp;</span>
      </md-button>
    </router-link>
  </md-toolbar>
</template>

<script>
  import { routes } from '../router';

  export default {
    name: 'links',
    data() {
      return {
        routes,
        buttonClasses: [
          '',
          'md-primary',
          'md-accent',
          'md-warn',
          'md-dense',
        ],
      };
    },
    methods: {
      randomClass() {
//        return 'md-dense';
        return this.buttonClasses[
          Math.floor(Math.random() * this.boardClasses.length)
        ];
      }
    },
  };
</script>

<style lang="stylus">
  .label
    color #ccc

  .router-link-exact-active
    background #008477
</style>
