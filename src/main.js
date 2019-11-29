import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts';
import './registerServiceWorker';
import Vuetify from 'vuetify/lib';
Vue.component('apexchart', VueApexCharts);

Vue.config.productionTip = false;

const opts = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#17C8BC',//colors.red.darken1, // #E53935
        secondary: '#fc4a1a', // #FFCDD2
        tertiary: '#ffbc00',
        quarter: '#ff6b6b',
        accent: '#3F51B5', // #3F51B5
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    }
  }
}

new Vue({
  router,
  store,
  vuetify: new Vuetify(opts),
  render: h => h(App),
}).$mount('#app');
