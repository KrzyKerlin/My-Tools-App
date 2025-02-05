import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import vuetify from './plugins/vuetify';
import Home from './views/Home.vue';
import GradientGenerator from './views/gradientGenerator/gradientGenerator.vue';
import ColorPalette from './views/colorPalette.vue';

const routes = [
     { path: "/", component: Home},
     { path: "/gradientGenerator", component: GradientGenerator},
     { path: "/colorPalette", component: ColorPalette}
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

createApp(App).use(router).use(vuetify).mount('#app')
