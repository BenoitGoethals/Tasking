import moment from 'moment';
import Vue from 'vue';

Vue.filter('formatDate',val => {
  if(val)
  {return moment(String(val)).format('MM/DD/YYYY hh:mm')}})
