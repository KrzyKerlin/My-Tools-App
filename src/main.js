import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import GradientGenerator from './views/gradientGenerator/gradientGenerator.vue';

const routes = [
     { path: "/", component: Home},
     { path: "/gradientGenerator", component: GradientGenerator}
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes})

createApp(App).use(router).mount('#app')
