import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { COCKTAIL_CODES } from '@/shared/consts/cocktails.ts';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: `/${COCKTAIL_CODES[0]}`,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
});

export default router;
