import Router from 'vue-router';

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: { name: 'relation.circle-packing' },
    },
    {
      path: '/relation',
      name: 'relation',
      component: () => import('@/views/relation'),
      children: [
        {
          path: 'circle-packing',
          name: 'relation.circle-packing',
          component: () => import('@/views/relation/circle-packing'),
        },
      ],
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "not-found" */ '@/views/error-page/404'),
    },
  ],
});

export default router;
