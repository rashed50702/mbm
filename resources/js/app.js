/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import App from './app.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import { routes } from './routes';

const router = new VueRouter({
    mode: 'history',
    routes: routes
});



const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
