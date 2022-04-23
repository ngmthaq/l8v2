require('./bootstrap');

import Vue from 'vue'
import router from './router';
import store from './store';
import trans from './mixins/trans';
import App from './App.vue';
import AuthLayout from './layouts/AuthLayout.vue';
import GuestLayout from './layouts/GuestLayout.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('auth-layout', AuthLayout);
Vue.component('guest-layout', GuestLayout);

Vue.config.productionTip = false;

Vue.mixin(trans);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
