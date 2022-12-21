import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import Vue from 'vue/dist/vue.esm.js';
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
import 'tiptap-vuetify/dist/main.css'



//Vuetify Config
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
const vuetify = new Vuetify()
Vue.use(Vuetify)

Vue.use(TiptapVuetifyPlugin, {
  // the next line is important! You need to provide the Vuetify Object to this place.
  vuetify, // same as "vuetify: vuetify"
  // optional, default to 'md' (default vuetify icons before v2.0.0)
  iconsGroup: 'md'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
