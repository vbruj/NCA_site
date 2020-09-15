import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import store from './components/store/store.js'
import firebase from 'firebase'

import Highcharts from "highcharts";
import Stock from "highcharts/modules/stock";
import HighchartsVue from "highcharts-vue";

Stock(Highcharts);
Vue.use(HighchartsVue);
Vue.config.productionTip = false

  firebase.initializeApp({
    apiKey: "AIzaSyBoagj2-2izO9G_aeNPpS5Yls3SFV1gI4g",
    authDomain: "nca-service.firebaseapp.com",
    databaseURL: "https://nca-service.firebaseio.com",
    projectId: "nca-service",
    storageBucket: "nca-service.appspot.com",
    messagingSenderId: "539387151682",
    appId: "1:539387151682:web:099494556d72e6b8fc34db",
    measurementId: "G-C5EDXF8TT4"
  })

new Vue({
  router,
  vuetify,
  store,
  HighchartsVue,
  render: h => h(App)
}).$mount('#app')