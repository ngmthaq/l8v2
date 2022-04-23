import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/Login.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.MIX_APP_URL,
    routes
})

export default router;
