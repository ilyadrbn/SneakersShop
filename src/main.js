import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Profile from './components/ProfilePage.vue';
import Favorites from './components/FavoritesPage.vue';
import About from './components/AboutPage.vue';
import Blog from './components/BlogPage.vue';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/about', name: 'About', component: About },
  { path: '/blog', name: 'Blog', component: Blog }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(createPinia()).use(router).mount('#app');
