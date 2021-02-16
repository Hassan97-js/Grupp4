<template>
    <div>
        <h1>Dam</h1>
        <product-gallery :products="women"></product-gallery>
    </div>
</template>

<script>
    import ProductGallery from '@/components/ProductGallery.vue'

    export default {
        components: { ProductGallery },
        name: 'Dam',

        created() {
            fetch('http://localhost:3000/products')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.women = data.filter(function(category) {
                        return category.productTarget === 'women'
                    })
                })
        },
        data() {
            return {
                women: []
            }
        }
    }
</script>

<style scoped lang="scss"></style>
