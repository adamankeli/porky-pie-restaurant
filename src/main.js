import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Table from './components/Table.vue'
import Welcome from './components/Welcome.vue'
import Complete from './components/Complete.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
const routes = [
  { name: 'welcome', path: '/', component: Welcome },
  { name: 'table', path: '/table', component: Table },
  { name: 'complete', path: '/complete', component: Complete }
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  el: '#app',
  data() {
    return {};
  },
  render: h => h(App)
});