<template>
  <div id="app">
    <SearchBar />
    <Nav />
    <div class="hr-line"></div>
    <b-container class="mt-4">
      <router-view />
    </b-container>
    <bootShoppingCart />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Global/Nav";
import SearchBar from "./components/Global/SearchBar";
import bootShoppingCart from "./components/Global/bootShoppingCart";
import Footer from "./components/Global/Footer";
export default {
  components: {
    Nav,
    SearchBar,
    bootShoppingCart,
    Footer
  }
};
</script>

<style>
div.hr-line {
  width: 100vw;
  height: 2vh;
  background: grey;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
