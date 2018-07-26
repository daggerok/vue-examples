<template>
  <div>
    <links></links>
    <div id="app">
      <router-view></router-view>
      <vue-progress-bar></vue-progress-bar>
    </div>
  </div>
</template>

<script>
  import Links from './components/Links.vue';

  export default {
    name: 'app',
    components: {
      Links,
    },
    mounted() {
      this.$Progress.finish();
    },
    created() {
      this.$Progress.start();
      this.$router.beforeEach((to, from, next) => {
        if (to.meta.progress !== undefined) {
          const meta = to.meta.progress;
          this.$Progress.parseMeta(meta);
        }
        this.$Progress.start();
        next();
      });
      this.$router.afterEach((_to, _from) => {
        this.$Progress.finish();
      });
    },
  };
</script>

<style scoped="">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
