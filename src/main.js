import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {path:'/',component:Landing},
  {path:'/login',component:Login},
  {path:'/signup',component:Signup}
];

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
