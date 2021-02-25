<template>
    <div v-if="kids">
        <h1>Barn</h1>
        <product-gallery :products="kids"></product-gallery>
    </div>
</template>

<script>
    import ProductGallery from '@/components/ProductGallery.vue'
    export default {
        components: { ProductGallery },
        name: 'Barn',
        async created() {
            await this.$store.dispatch('getProductInfo')
            this.getCategory()
        },
        data() {
            return {
                kids: []
            }
        },
        computed: {
            allProducts() {
                return this.$store.state.allProducts
            }
        },
        methods: {
            getCategory() {
                this.kids = this.allProducts.filter(category => {
                    return category.productTarget === 'kids'
                })
            }
        }
    }
</script>

<style scoped lang="scss"></style>
