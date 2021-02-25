<template>
    <div v-if="men">
        <h1>Herr</h1>
        <product-gallery :products="men"></product-gallery>
    </div>
</template>

<script>
    import ProductGallery from '@/components/ProductGallery.vue'
    export default {
        components: { ProductGallery },
        name: 'Herr',
        async created() {
            await this.$store.dispatch('getProductInfo')
            this.getCategory()
        },
        data() {
            return {
                men: []
            }
        },
        computed: {
            allProducts() {
                return this.$store.state.allProducts
            }
        },
        methods: {
            getCategory() {
                this.men = this.allProducts.filter(category => {
                    return category.productTarget === 'men'
                })
            }
        }
    }
</script>
<style scoped lang="scss"></style>
