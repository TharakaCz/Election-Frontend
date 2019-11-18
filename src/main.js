import Vue from 'vue'
import App from './App.vue'
import NavBar from './core/NavBar.vue'
import Vote from './components/Vote.vue'
import VueRouter from 'vue-router'


Vue.component('app-navbar',NavBar);
Vue.use(VueRouter);

const routes = [
  {path:'/voted',component:Vote}
];

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
