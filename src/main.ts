import Vue from 'vue';
import ElementUI from 'element-ui';
import './style/element-variables.scss';
import App from './App.vue';
import router from './router/index';
import store from './store';
import 'normalize.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
