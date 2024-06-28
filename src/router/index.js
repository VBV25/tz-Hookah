import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: () => import('@/pages/HomePage.vue'),
      children: [
        {
          path: ':catchAll(.*)*',
          component: () => import('@/pages/HomePage.vue'),
        },
      ],
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: () => import('@/pages/CatalogPage.vue'),
      children: [
        {
          path: ':catchAll(.*)*',
          component: () => import('@/pages/CatalogPage.vue'),
        },
      ],
    },

    {
      path: '/information',
      name: 'information-company',
      component: () => import('@/pages/InformationPage.vue'),
      children: [
        {
          path: ':catchAll(.*)*',
          component: () => import('@/pages/InformationPage.vue'),
        },
      ],
    },

    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/pages/BlogPage.vue'),
      children: [
        {
          path: ':catchAll(.*)*',
          component: () => import('@/pages/BlogPage.vue'),
        },
      ],
    },
  ],
});

export default router;
