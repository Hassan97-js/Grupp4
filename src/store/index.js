// jshint esversion:6

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isVisible: false
  },
  mutations: {
    setIsVisible(state, visible) {
      state.isVisible = visible;
    }
  },
  actions: {}
});
