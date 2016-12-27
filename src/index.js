import Vue from 'vue';
import vmA from './vmA';

import './index.scss';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component('my-component', vmA);

const routes = [
  {path: '/test', component: vmA}
];

const router = new VueRouter({
  routes
});

export default new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: {vmA}
});
