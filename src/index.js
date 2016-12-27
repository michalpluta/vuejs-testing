import Vue from 'vue';

import App from './App.vue';
import Hello from './app/Hello.vue';
import Home from './app/Home.vue';
import Login from './app/Login.vue';

import './index.scss';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: '/', component: Home},
  {path: '/hello', component: Hello},
  {path: '/login', component: Login, logged: false}
];

const router = new VueRouter({
  routes
});

// export default new Vue({
//   el: '#root',
//   router,
//   render: h => h('router-view')
// });

export default new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
});
