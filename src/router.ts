import Vue from 'vue';
import Router from 'vue-router';
import ItemsImpl1 from '@/views/ItemsImpl1.vue';
import ItemsImpl2 from '@/views/ItemsImpl2.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'impl1',
      component: ItemsImpl1,
    },
    {
      path: '/impl2',
      name: 'impl2',
      component: ItemsImpl2,
    },
  ],
});
