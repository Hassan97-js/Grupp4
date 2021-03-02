<template>
    <div class="d-flex flex-column" v-if="men">
        <h1>Men</h1>
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
            },
            sortLowToHigh() {
                return this.men.sort(function(a, b) {
                    return a.price - b.price
                })
            },
            sortHighToLow() {
                return this.men.sort(function(a, b) {
                    return b.price - a.price
                })
            },
            sortByName() {
                this.men.sort((a, b) => {
                    if (a.productType < b.productType) {
                        return -1
                    }
                    if (a.productType > b.productType) {
                        return 1
                    }
                    return 0
                })
                return this.men
            }
        }
    }
</script>
<style scoped lang="scss"></style>
