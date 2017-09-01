<template>
  <v-app dark>
    <links></links>
    <v-toolbar>
      <v-toolbar-title>Nice Material Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat="" @click="changeLocation()">
          <a class="btn__content"
             target="_blank"
             href="https://github.com/daggerok/vue-examples/tree/master/13-vuetify">GitHub</a></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </v-app>
</template>

<script>
  import Links from './App/Links.vue';

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

<style scoped=""></style>
