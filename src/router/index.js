// jshint esversion:6

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dam from "../views/Dam.vue";
import Barn from "../views/Barn.vue";
import Herr from "../views/Herr.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dam",
    name: "Dam",
    component: Dam
  },
  {
    path: "/barn",
    name: "Barn",
    component: Barn
  },

  {
    path: "/herr",
    name: "Herr",
    component: Herr
  },

  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
