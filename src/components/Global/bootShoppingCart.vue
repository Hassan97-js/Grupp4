<template>
  <div>
    <b-sidebar id="sidebar-right" right shadow width="450px">
      <header class="h2 mb-4">Shopping Cart</header>
      <hr class="bg-dark" />
      <main class="px-3 py-2 scroll-container">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </main>
      <hr class="bg-dark" />
      <div class="cart-price">
        <h2 class="mt-3">Summa</h2>
        <button class="btn btn-primary m-4 button-kassa">Checkout</button>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import CartCard from "./CartCard";

export default {
  name: "bootShoppingCart",
  components: {
    CartCard
  }
};
</script>
<style scoped lang="scss">
main.scroll-container {
  overflow-y: scroll;
  height: 70%;
  border-radius: 50px;
}
@media (min-width: 375px) and (max-width: 768px) {
  main.scroll-container {
    height: 60%;
  }
}
</style>
