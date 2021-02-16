// jshint esversion:8

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProducts: null,
    cart: null
  },
  mutations: {
    setAllProducts(state, products) {
      state.allProducts = products;
    },
    pushToCart(state, newInfo) {
      const productInfoArr = [];
      productInfoArr.push(newInfo);
      state.cart = productInfoArr;
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
