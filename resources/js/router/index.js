import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import Welcome from '../pages/Welcome.vue';

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    meta: { title: 'L8V2CPS v0.1.1-dev' }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    if (to.meta.title) {
      document.title = (to.meta.title + process.env.MIX_TITLE_TEMPLATE);
    }
  });
});

export default router;
