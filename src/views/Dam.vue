<template>
    <div class="d-flex flex-column" v-if="women">
        <h1>Women</h1>
        <b-dropdown
            variant="primary"
            size="sm"
            text="Sort by"
            class="mx-auto w-25 my-4"
        >
            <b-dropdown-item @click="sortLowToHigh"
                >Price low-high</b-dropdown-item
            >
            <b-dropdown-item @click="sortHighToLow"
                >Price high-low</b-dropdown-item
            >
            <b-dropdown-item @click="sortByName">Name</b-dropdown-item>
        </b-dropdown>
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
            },
            sortLowToHigh() {
                return this.women.sort(function(a, b) {
                    return a.price - b.price
                })
            },
            sortHighToLow() {
                return this.women.sort(function(a, b) {
                    return b.price - a.price
                })
            },
            sortByName() {
                this.women.sort((a, b) => {
                    if (a.productType < b.productType) {
                        return -1
                    }
                    if (a.productType > b.productType) {
                        return 1
                    }
                    return 0
                })
                return this.women
            }
        }
    }
</script>

<style scoped lang="scss"></style>
