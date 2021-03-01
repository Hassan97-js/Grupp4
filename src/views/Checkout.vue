<template>
    <div class="checkout-view">
        <h1>Checkout</h1>
        <checkout-comp></checkout-comp>
    </div>
</template>

<script>
    import CheckoutComp from '@/components/Global/CheckoutComp.vue'
    export default {
        components: { CheckoutComp },
        name: 'Checkout'
    }
</script>

<style>
    .checkout-view {
        height: 150vh;
        margin-bottom: 50px;
    }
</style>
