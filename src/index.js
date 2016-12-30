import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import Hello from './app/Hello.vue';
import Home from './app/Home.vue';
import Login from './app/Login.vue';
import Profile from './app/Profile.vue';
import store from './store';
// import VueLocalStorage from 'vue-localstorage';

import './index.scss';

Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(VueLocalStorage);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/hello',
    component: Hello,
    name: 'hello'
  },
  {
    path: '/hello/:userId',
    component: Profile,
    name: 'profile'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
];

const router = new VueRouter({
  routes
});

const toggleHeader = () => {
  "use strict";
  const origin = location.origin;
  const locationURL = window.location.href;
  const cutted = locationURL.replace(origin, '');

  const publicPages = ['/#/login', '/#/register', '/#/lost_password', '/#/logout'];
  const restrictedPage = publicPages.indexOf(cutted) === -1;

  if (restrictedPage) {
    window.localStorage.showHeader = true;
  } else if (!restrictedPage) {
    window.localStorage.showHeader = false;
  }
};

toggleHeader();

export default new Vue({
  router,
  store,
  localStorage: {
    showHeader: {
      default: true
    }
  },
  el: '#app',
  template: '<App/>',
  components: {App},
  watch: {
    $route: () => {
      "use strict";
      toggleHeader();
    }
  }
});
