import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
VeeValidate.Validator.extend('passphrase', {
  getMessage: field => 'Sorry dude, wrong pass phrase.',
  validate: value => value.toUpperCase() == 'Demogorgon'.toUpperCase()
});

