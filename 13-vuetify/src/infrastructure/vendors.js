/*
 * vue
 */

import Vue from 'vue';

/*
 * vue progress bar
 */

import VueProgressbar from 'vue-progressbar';

export const config = {
  color: 'rgb(143, 255, 199)',
  failedColor: 'darkgreen',
  thickness: '5px',
  transition: {
    speed: '0.6s',
    opacity: '0.6s',
    termination: 400
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};

Vue.use(VueProgressbar/*, config */);

/*
 * fetch
 */

if (!window.fetch || typeof window.fetch !== 'function')
  require('whatwg-fetch');

/*
 * jquery
 */

if (!window.$ || typeof window.$ !== 'function')
  window.$ = window.jQuery = require('jquery');

/*
 * material design icons
 */

import 'material-design-icons/iconfont/material-icons.css';

/*
 * vuetify
 */

// import('vuetify/dist/vuetify.min.css');
import 'vuetify/src/stylus/main.styl';

import Vuetify from 'vuetify';

Vue.use(Vuetify);

/*
 * vuefire
 */

import VueFire from 'vuefire';

Vue.use(VueFire);

/* // vue-material
import 'vue-material/dist/vue-material.css';
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: 'teal',
});
 */

/* // vee-validate
import messages from 'vee-validate/dist/locale/ru';
import VeeValidate, { Validator } from 'vee-validate';

Validator.addLocale(messages);

const config = {
  locale: 'ru'
};

Vue.use(VeeValidate, config);
*/
