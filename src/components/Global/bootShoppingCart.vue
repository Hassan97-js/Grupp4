<template>
    <div>
        <b-sidebar id="sidebar-right" right shadow width="450px">
            <header class="h2 mb-4">Shopping Cart</header>
            <hr class="bg-dark" />
            <main class="px-3 py-2 scroll-container">
                <CartCard />
            </main>
            <hr class="bg-dark" />
            <div class="cart-price">
                <h2 class="mt-3 font-weight-bolder">Total</h2>
                <h3>{{ totalAmount }}:-</h3>
                <button class="btn btn-primary m-4 button-kassa">
                    Checkout
                </button>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
    import CartCard from './CartCard'

    export default {
        name: 'bootShoppingCart',
        computed: {
            cart() {
                return this.$store.state.cart
            },
            totalAmount() {
                if (this.$store.state.cart.length > 0) {
                    return this.$store.state.cart
                        .map(product => product.price * product.counter)
                        .reduce((total, amount) => total + amount)
                } else {
                    return 0
                }
            }
        },
        components: {
            CartCard
        }
    }
</script>
<style scoped lang="scss">
    .button-kassa {
        box-shadow: 4px 4px 8px -3px #4c4c4c;
    }
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
