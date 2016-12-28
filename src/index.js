import Vue from 'vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import Hello from './app/Hello.vue';
import Home from './app/Home.vue';
import Login from './app/Login.vue';
import store from './store';
import VueLocalStorage from 'vue-localstorage';

import './index.scss';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueLocalStorage);

const routes = [
  {path: '/', component: Home},
  {path: '/hello', component: Hello},
  {path: '/login', component: Login}
];

const router = new VueRouter({
  routes
});

console.log(
  localStorage
);

export default new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: {App},
  localStorage: {
    showHeader: {
      default: true
    }
  }
});
