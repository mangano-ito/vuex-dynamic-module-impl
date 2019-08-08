import Vue from 'vue';
import Router from 'vue-router';
import Items from '@/views/Items.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'items',
      component: Items,
    },
  ],
});
