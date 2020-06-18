import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

import { router } from "./router";
import { store } from "./store/store"

// import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueResource);
/*
Vue.use(VueGoogleMaps, {
  load : {
    key : "AIzaSyByyiiFtXwjXqK9s6sWFE9vlirydUKFriA",
    libraries: 'places'
  }
});
*/
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});


