import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import PreferencesView from './views/PreferencesView.vue';
import NewsList from './components/NewsList.vue';
import NewsDetail from './components/NewsDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/preferences', component: PreferencesView },
  { path: '/news/:feedId', component: NewsList, props: true },
  { path: '/news/detail/:newsId', component: NewsDetail, props: true },
  { path: '/:pathMatch(.*)*', component: () => import('./views/NotFound.vue') } // Page 404
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
