<template>
  <div class="flex-cart-container">
    <div class="flex-product-info-item">
      <img src="" alt="Product Image" />
      <div class="product-info-text">Info text</div>
    </div>
    <div class="user-cart-options">
      <b-icon class="btn-cart-x" icon="cart-x" variant="danger"></b-icon>
      <div class="product-value">
        <select class="custom-select custom-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <span class="product-pris"></span>
        summa
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartCard"
};
</script>

<style scoped lang="scss">
div.flex-cart-container {
  height: 15vh;
  width: 80%;
  margin: 0 auto;
  background: gray;
  display: flex;
  border-radius: 10px;
}
.btn-cart-x {
  cursor: pointer;
}
</style>
