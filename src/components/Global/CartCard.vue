<template>
    <div>
        <div
            v-for="(product, id) in $store.state.cart"
            :key="id"
            class="flex-cart-container p-3 "
        >
            <div class="iconX">
                <b-icon
                    class="btn-cart-x"
                    icon="cart-x"
                    variant="danger"
                    @click="removeItem(id)"
                ></b-icon>
            </div>
            <div class="flex-product-info-item">
                <img
                    class="product-img"
                    :src="require('../../assets/' + product.img)"
                    alt="Product Image"
                />
                <div class="product-info-text font-weight-bold">
                    <p class="text-capitalize">
                        {{ product.productType }}
                    </p>
                    <p>{{ product.productTarget }}</p>
                    <p>
                        {{ product.size }}
                    </p>
                </div>
            </div>
            <div
                class="user-cart-options d-flex justify-content-between align-items-center"
            >
                <div
                    class="counter-button d-flex justify-content-start mt-2 align-items-center"
                >
                    <button
                        @click="decrease(product)"
                        class="btn btn-outline-primary btn-sm px-2 py-0 h-25"
                    >
                        -
                    </button>
                    <input
                        class="input-select form-control-sm w-25 mx-2 p-1 border-0 text-center"
                        type="text"
                        v-model="product.counter"
                    />
                    <button
                        @click="increase(product)"
                        class="btn btn-outline-primary btn-sm px-2 py-0 h-25"
                    >
                        +
                    </button>
                </div>

                <span class="product-pris font-weight-bolder mb-0 h5 mr-0">
                    {{ product.price }}:-
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CartCard',
        computed: {
            cart() {
                return this.$store.state.cart
            }
        },
        methods: {
            increase(product) {
                if (product.counter < 10) product.counter++
            },
            decrease(product) {
                if (product.counter > 1) product.counter--
            },
            removeItem(id) {
                this.$store.commit('removeItem', id)
            }
        }
    }
</script>

<style scoped lang="scss">
    p {
        color: rgb(59, 56, 106);
    }
    span {
        color: rgb(59, 56, 106);
    }
    div.flex-cart-container {
        height: 35%;
        max-height: 220px;
        width: 80%;
        margin: 0 auto 1rem auto;
        background: rgb(224, 211, 233);
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 5px 5px 14px -2px rgba(0, 0, 0, 0.35);
        div.flex-product-info-item {
            display: flex;
            padding: 0.3rem;
        }
        img.product-img {
            height: 100px;
            width: 100px;
            object-fit: contain;
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
