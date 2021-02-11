<template>
  <div v-show="visible" class="shopping-cart mt-2">
    <header class="h3 text-primary p-2">Varukorg</header>
    <main class="scroll-container">
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
    </main>
    <div class="cart-price">
      <h2>summa</h2>
      <button class="btn btn-primary btn-lg btn-block button-kassa">
        Kassa
      </button>
    </div>
  </div>
</template>

<script>
import CartCard from "../Global/CartCard";
export default {
  name: "ShoppingCart",
  components: {
    CartCard
  },
  computed: {
    visible() {
      return this.$store.state.isVisible;
    }
  }
};
</script>

<style scoped lang="scss">
div.shopping-cart {
  float: right;
  margin-right: 3rem;
  height: 45vh;
  width: 20vw;
  background: seashell;
  color: white;
  border-radius: 15px;
  .cart-price {
    margin-top: 0.5rem;
    padding: 1rem;
  }
  .button-kassa {
    margin-top: 1rem;
  }
  h2 {
    color: red;
  }
  main.scroll-container {
    overflow-y: scroll;
    height: 24rem;
    border-radius: 15px;
  }
}
</style>
