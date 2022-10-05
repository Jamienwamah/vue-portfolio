//import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import Vue from 'vue'
//import VueRouter from 'vue-router'

//Vue.use(VueRouter);
// createApp(App).mount('#app')
new Vue({
    vuetify,
    render: (h) => h(App) 
  }).$mount('#app')

  // creating an instance
  //const router = new VueRouter({

 // });