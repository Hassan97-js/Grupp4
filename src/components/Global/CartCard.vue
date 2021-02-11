<template>
  <div class="flex-cart-container p-3">
    <div class="iconX">
      <b-icon class="btn-cart-x" icon="cart-x" variant="danger"></b-icon>
    </div>
    <div class="flex-product-info-item">
      <img
        class="product-img"
        src="../../assets/jpgPlaceholderImg.jpg"
        alt="Product Image"
      />
      <div class="product-info-text">
        <p>Pruduct Name</p>
        <p>Info</p>
        <p>Storlek/Färg</p>
      </div>
    </div>
    <div class="user-cart-options">
      <select class="input-select form-control-sm mr-2 p-1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <span class="product-pris">Priset</span>
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
  height: 35%;
  max-height: 220px;
  width: 80%;
  margin: 0 auto 1rem auto;
  background: gray;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
  div.flex-product-info-item {
    display: flex;
    padding: 0.3rem;
  }
  img.product-img {
    height: 100px;
    width: 100px;
  }
  div.product-info-text {
    margin-left: 10px;
    width: 80%;
    p {
      text-align: left;
    }
  }
  div.user-cart-options {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
.btn-cart-x {
  cursor: pointer;
  float: right;
}
@media (min-width: 375px) and (max-width: 768px) {
  div.flex-cart-container {
    height: 58%;
    max-height: 220px;
  }
}
</style>
