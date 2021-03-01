// jshint esversion:8

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        allProducts: null,
        cart: null,
        search: null,
        filteredSearch: null
    },
    getters: {
        getSearch(state) {
            return state.search
        },
        getFilteredSearch(state) {
            return state.filteredSearch
        }
    },
    mutations: {
        setAllProducts(state, products) {
            state.allProducts = products;
        },
        pushToCart(state, newInfo) {
            const productInfoArr = [];
            productInfoArr.push(newInfo);
            state.cart = productInfoArr;
        },
        setSearch(state, newSearch) {
            state.search = newSearch;
        },
        filteredProducts(state, searchWord) {
            if (state.allProducts === null) {
                return []
            } else {
                state.search = searchWord
                searchWord = searchWord.trim().toLowerCase()
                state.filteredSearch = state.allProducts.filter(product => {
                    return (
                        product.productType
                            .toLowerCase()
                            .includes(searchWord) ||
                        product.productTarget.toLowerCase().includes(searchWord)
                    )
                })
            }
        }
        },

    actions: {
        async getProductInfo(context) {
            const productInfo = await fetch("http://localhost:3000/products");
            const productResult = await productInfo.json();
            context.commit("setAllProducts", productResult);
        },

        SET_SEARCH(context, newSearch) {
            context.commit("setSearch", newSearch);
        },
        filteredProducts({ commit }, searchWord) {
            commit('filteredProducts', searchWord)
        }
    }
});