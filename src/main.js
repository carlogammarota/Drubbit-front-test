import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import Vue from 'vue/dist/vue.esm.js';
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
import 'tiptap-vuetify/dist/main.css'

import '@mdi/font/css/materialdesignicons.css'

import MenuIcon from 'vue-material-design-icons/Menu.vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'slick-carousel/slick/slick.css';
// import 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css';
Vue.component('menu-icon', MenuIcon);

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

// export default new Vuetify()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdiSvg' || 'fa'// 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
      // dark: true,
      disable: false
    },
    themes: {
      light: {
        primary: "#4682b4",
        secondary: "#461e8c",
        template: "#461e8c",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  }),
  render: h => h(App)
}).$mount('#app')
