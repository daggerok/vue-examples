import Vue from 'vue';
import messages from 'vee-validate/dist/locale/ru';
import VeeValidate, { Validator } from 'vee-validate';

Validator.addLocale(messages);

const config = {
  locale: 'ru'
};

Vue.use(VeeValidate, config);
