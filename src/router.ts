import Vue from 'vue';
import Router from 'vue-router';
import ItemsImpl1 from '@/views/ItemsImpl1.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'impl1',
      component: ItemsImpl1,
    },
  ],
});
