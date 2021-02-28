// jshint esversion:8

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProducts: null,
    cart: [],

    //User details
    users: [
      {
        id: 1,
        username: "testuser",
        password: "test",
        email: "test@test.com",
        favourites: [],
        orders: []
      },
      {
        id: 2,
        username: "testuser2",
        password: "test2",
        email: "test@test.com",
        favourites: [],
        orders: []
      }
    ]
  },
  mutations: {
    setAllProducts(state, products) {
      state.allProducts = products;
    },
    pushToCart(state, newInfo) {
      state.cart.push(newInfo);
    },
    removeItem(state, id) {
      Vue.delete(state.cart, id);
    },
    // User mutations
    addUser(state, user) {
      state.users.push(user);
    },
    editUsername(state, newName) {
      const index = state.users.findIndex(users => users.id === newName.id);
      state.users[index].username = newName.username;
    },
    editPassword(state, newPassword) {
      const index = state.users.findIndex(users => users.id === newPassword.id);
      state.users[index].password = newPassword.password;
    },
    editEmail(state, newEmail) {
      const index = state.users.findIndex(users => users.id === newEmail.id);
      state.users[index].email = newEmail.email;
    },
    // favourites
    addToFavourites(state, product) {
      const index = state.users.findIndex(
        users => users.username === product.username
      );
      state.users[index].favourites.push(product.product);
    },

    // orders
    addOrder(state, payload) {
      const index = state.users.findIndex(users => users.id === payload.id)
      state.users[index].orders.push ({id: Math.floor(Math.random() * 100), order: payload.order})
      },

    // empty cart on checkout

    emptyCart(state, payload){
      state.cart = payload
    }
  },
  actions: {
    async getProductInfo(context) {
      const productInfo = await fetch("http://localhost:3000/products");
      const productResult = await productInfo.json();
      context.commit("setAllProducts", productResult);
    }
  }
});
