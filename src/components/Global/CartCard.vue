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
        <p class="text-capitalize">{{ $store.state.cart[0].productType }}</p>
        <p>{{ $store.state.cart[0].productTarget }}</p>
      </div>
    </div>
    <div class="user-cart-options">
      <div
        class="counter-button d-flex justify-content-start mt-2 align-items-center"
      >
        <button
          @click="decrease"
          class="btn btn-outline-primary btn-sm px-2 py-0 h-25"
        >
          -
        </button>
        <input
          class="input-select form-control-sm w-25 mx-2 p-1 border-0 text-center"
          type="text"
          v-model="counterValue"
        />
        <button
          @click="increase"
          class="btn btn-outline-primary btn-sm px-2 py-0 h-25"
        >
          +
        </button>
      </div>
      <span class="product-pris mr-5 mb-0 font-weight-bold h5">{{
        $store.state.cart[0].price
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartCard",
  data() {
    return {
      counterValue: 1
    };
  },
  methods: {
    increase() {
      if (this.counterValue < 10) this.counterValue++;
    },
    decrease() {
      if (this.counterValue > 1) this.counterValue--;
    }
  }
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
