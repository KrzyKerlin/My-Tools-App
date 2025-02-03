import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.min.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import Home from './views/Home.vue';
import GradientGenerator from './views/gradientGenerator/gradientGenerator.vue';

const routes = [
     { path: "/", component: Home},
     { path: "/gradientGenerator", component: GradientGenerator}
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
    },
  });

createApp(App).use(router).use(vuetify).mount('#app')
