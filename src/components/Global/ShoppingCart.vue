<template>
  <div class="shopping-cart">
    <header>Varukorg</header>
    <main>
      <CartCard />
    </main>
  </div>
</template>

<script>
import CartCard from "../Global/CartCard";
export default {
  name: "ShoppingCart",
  components: {
    CartCard
  }
};
</script>

<style scoped lang="scss">
div.shopping-cart {
  float: right;
  margin-right: 3rem;
  height: 20vh;
  width: 20vw;
  background: black;
  color: white;
}
</style>
