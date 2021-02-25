<template>
    <div v-if="women">
        <h1>Dam</h1>
        <product-gallery :products="women"></product-gallery>
    </div>
</template>

<script>
    import ProductGallery from '@/components/ProductGallery.vue'

    export default {
        components: { ProductGallery },
        name: 'Dam',

        async created() {
            await this.$store.dispatch('getProductInfo')
            this.getCategory()
        },
        data() {
            return {
                women: []
            }
        },
        computed: {
            allProducts() {
                return this.$store.state.allProducts
            }
        },
        methods: {
            getCategory() {
                this.women = this.allProducts.filter(category => {
                    return category.productTarget === 'women'
                })
            }
        }
    }
</script>

<style scoped lang="scss"></style>
