import Vue from 'vue';
import ElementUI from 'element-ui';
import './style/element-variables.scss';
import App from './App.vue';
import router from './router/index';
import store from './store';
import 'normalize.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.filter('priceFmt', (value: String) => String(Number(value).toFixed(0)).replace(/(\d)(?=(\d{3})+$)/g, '$1,'));
Vue.filter('substring', (value: String) => String(value).substr(0, 9));
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
