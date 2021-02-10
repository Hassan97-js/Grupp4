<template>
  <div id="app">
    <b-container>
      <SearchBar />
      <Nav />
      <router-view />
    </b-container>
    <div class="hr-line"></div>
    <ShoppingCart />
    <Footer />
  </div>
</template>

<script>
// Test
import Nav from "./components/Global/Nav";
import SearchBar from "./components/Global/SearchBar";
import ShoppingCart from "./components/Global/ShoppingCart";
import Footer from "./components/Global/Footer";
export default {
  components: {
    Nav,
    SearchBar,
    ShoppingCart,
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
