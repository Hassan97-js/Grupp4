<template>
    <div class="checkout-component">
        <b-container>
            <b-row>
                <b-col xs="12" md="6">
                    <b-card class="payment-info mx-auto">
                        <h3>Payment info</h3>
                        <b-card-body>
                            <b-form-group
                                id="input-group-1"
                                label="Email:"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    placeholder="Enter Email"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="input-group-1"
                                label="Full Name:"
                                label-for="input-1"
                            >
                                <b-form-input
                                    id="input-1"
                                    placeholder="Enter Name"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="input-group-2"
                                label="Address:"
                                label-for="input-2"
                            >
                                <b-form-input
                                    id="input-2"
                                    placeholder="Street"
                                ></b-form-input>
                                <b-form-input
                                    id="input-2"
                                    placeholder="Zip Code"
                                ></b-form-input>
                                <b-form-input
                                    id="input-2"
                                    placeholder="City"
                                ></b-form-input>
                            </b-form-group> </b-card-body
                    ></b-card>
                </b-col>
                <!-- Cart to the right -->
                <b-col xs="12" md="4">
                    <b-card>
                        <h3>My cart</h3>
                        <!-- Card component for every item in the cart -->
                        <div
                            v-for="(product, id) in $store.state.cart"
                            :key="id"
                        >
                            <b-card
                                :img-src="
                                    require('../../assets/' + product.img)
                                "
                                img-alt="Card image"
                                img-left
                                class="mb-3"
                            >
                                <b-icon icon="x"></b-icon>

                                <b-card-text class="product-type">
                                    {{ product.productType }}
                                </b-card-text>

                                <b-card-text class="product-price">
                                    {{ product.price }}kr
                                </b-card-text>
                                <div class="favourite">
                                    <b-icon
                                        class="favourite-text"
                                        icon="heart"
                                    ></b-icon>
                                    <b-card-text class="favourite-text">
                                        Spara som favorit
                                    </b-card-text>
                                </div>
                            </b-card>
                        </div>
                        <div class="btn-group">
                            <b-button variant="default"
                                >Continue Shopping</b-button
                            >
                            <b-button variant="primary">Checkout</b-button>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'CheckoutComp',
        computed: {
            cart() {
                return this.$store.state.cart
            }
        }
    }
</script>

<style scoped>
    div.card-body {
        display: flex;
        flex-direction: column;
    }
    div.row {
        justify-content: center;
    }
    div.favourite {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .favourite-text {
        border: 1px solid black;
        margin-right: 10px;
    }
    .card-img-left {
        height: 100px;
    }
    .btn-group {
        display: flex;
        justify-content: space-between;
    }
</style>
