// jshint esversion:8

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProducts: null,
    cart: []
  },
  mutations: {
    setAllProducts(state, products) {
      state.allProducts = products;
    },
    pushToCart(state, newInfo) {
      state.cart.push(newInfo);
    },
    removeItem(state, index) {
      Vue.delete(state.cart, index);
    }
  },
  actions: {
    async getProductInfo(context) {
      try {
        const productInfo = await fetch("http://localhost:3000/products");
        const productResult = await productInfo.json();
        context.commit("setAllProducts", productResult);
      } catch (err) {
        console.error(err);
      }
    }
  }
});
