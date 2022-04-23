import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from '../pages/Homepage.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.MIX_APP_URL,
    routes
})

export default router;
