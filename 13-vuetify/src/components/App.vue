<template>
  <v-app dark toolbar>
    <!--enable-resize-watcher-->
    <v-navigation-drawer
      class="pb-0"
      persistent
      height="100%"
      clipped
      absolute

      v-model="sideNav"
    >

    </v-navigation-drawer>
    <links></links>
    <v-toolbar fixed="">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>Nice Material Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat="">
          <i class="fa icon fa-github" data-v-c5e56f46=""/>
          <a class="btn__content"
             target="_blank"
             href="https://github.com/daggerok/vue-examples/tree/master/13-vuetify">
            GitHub
          </a>
        </v-btn>
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
    data() {
      return {
        sideNav: false
      };
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
