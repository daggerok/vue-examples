<template>
  <v-app toolbar>
    <!--enable-resize-watcher-->
    <v-navigation-drawer v-model="sideNav"
      class="pb-0"
      persistent
      height="100%"
      clipped
      absolute
    >
      <v-list>
        <v-list-tile v-for="item in menuItems">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.value}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <links></links>
    <v-toolbar fixed="">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>Nice Material Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn flat="" v-for="item in menuItems">
          <v-icon left="">{{item.icon}}</v-icon>
          {{item.value}}
        </v-btn>
        <v-btn flat="">
          <i class="fa icon fa-github" />
          <a class="btn__content a--text-decoration--none"
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
        sideNav: false,
        menuItems: [
          { icon: 'info', value: 'Additional Info' },
          { icon: 'event', value: 'Events' },
          { icon: 'cloud', value: 'Download' },
          { icon: 'face', value: 'Sign Up' },
          { icon: 'lock_open', value: 'Sign In' },
          { icon: 'home', value: 'Home' },
        ],
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

<style lang="stylus">
  /* Vuetify theme configuration */
  @import "~vuetify/src/stylus/settings/_colors.styl";
  $theme := {
    primary: $blue.darken-2
    accent: $blue.accent-2
    secondary: $grey.darken-3
    info: $blue.base
    warning: $amber.base
    error: $red.base
    success: $green.base
  }
  @import "~vuetify/src/stylus/main.styl";
  /* global v-app styling */
  a.a--text-decoration--none
    text-decoration none
</style>
