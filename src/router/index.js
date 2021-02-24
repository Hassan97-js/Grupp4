// jshint esversion:6

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dam from "../views/Dam.vue";
import Barn from "../views/Barn.vue";
import Herr from "../views/Herr.vue";
import ProductPage from "../views/ProductPage.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import User from "../views/User.vue";
import Sale from "../views/Sale.vue"

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
    path: "/product",
    name: "Herr",
    component: ProductPage
  },

  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/user",
    name: "User",
    component: User
  },
  {
    path: "/sale",
    name: "Sale",
    component: Sale
  }
];

const router = new VueRouter({
  routes
});

export default router;
