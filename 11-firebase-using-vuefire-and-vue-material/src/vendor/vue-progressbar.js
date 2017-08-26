import Vue from 'vue';
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
