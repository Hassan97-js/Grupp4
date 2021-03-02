<template>
    <div class="checkout-view">
        <h1 class="mb-4">Checkout</h1>
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
        margin-bottom: 50px;
    }
</style>
