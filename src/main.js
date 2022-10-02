//import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import Vue from 'vue'
// createApp(App).mount('#app')
new Vue({
    vuetify,
    render: (h) => h(App) 
  }).$mount('#app')