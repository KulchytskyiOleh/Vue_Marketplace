import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import loginPage from '../components/loginPage';
import registerPage from '../components/registerPage';
import ResetPassword from '../components/ResetPassword';
import axios from 'axios';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/reset',
    name: 'reset',
    component: ResetPassword,
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage,
  },
  {
    path: '/register',
    name: 'register',
    component: registerPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
