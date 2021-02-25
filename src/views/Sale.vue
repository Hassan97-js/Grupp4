<template>
    <div>
        <b-dropdown
            variant="primary"
            size="sm"
            text="Sort by"
            class="float-right"
        >
            <b-dropdown-item @click="sortLowToHigh"
                >Price low-high</b-dropdown-item
            >
            <b-dropdown-item @click="sortHighToLow"
                >Price high-low</b-dropdown-item
            >
            <b-dropdown-item @click="sortByName">Name</b-dropdown-item>
        </b-dropdown>
        <h1>Sale</h1>
        <product-gallery :products="sale"></product-gallery>
    </div>
</template>

<script>
    import ProductGallery from '@/components/ProductGallery.vue'
    export default {
        name: 'Sale',
        components: { ProductGallery },
        created() {
            fetch('http://localhost:3000/products')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.sale = data.filter(function(sale) {
                        return sale.onSale === true
                    })
                })
        },
        methods: {
            sortLowToHigh() {
                return this.sale.sort(function(a, b) {
                    return a.price - b.price
                })
            },
            sortHighToLow() {
                return this.sale.sort(function(a, b) {
                    return b.price - a.price
                })
            },
            sortByName() {
                this.sale.sort((a, b) => {
                    if (a.productType < b.productType) {
                        return -1
                    }
                    if (a.productType > b.productType) {
                        return 1
                    }
                    return 0
                })
                return this.sale
            }
        },
        data() {
            return {
                sale: []
            }
        }
    }
</script>
