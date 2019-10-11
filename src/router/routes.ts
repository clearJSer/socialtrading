import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Main from '../views/layout/Main.vue';
import NotFound from '../views/404/NotFound.vue';
import Test from '../views/Test.vue';

// const MapData = () => import(/* webpackChunkName: 'mapData' */ '../views/MapData.vue');
import MapData from '../views/MapData.vue';

Vue.use(Router);

export default [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {},
        component: () => import(/* webpackChunkName: 'home' */ '../views/Home.vue'),
      },
      {
        path: '/data',
        name: 'data',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: MapData,
      },
      {
        path: '/test',
        name: 'test',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Test,
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },

];
