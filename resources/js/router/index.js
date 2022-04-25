import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../pages/Welcome.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.MIX_APP_URL,
    routes
})

export default router;
