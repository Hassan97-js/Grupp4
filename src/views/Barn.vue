<template>
    <div>
        <h1>Barn</h1>
        <product-gallery :products="kids"></product-gallery>
    </div>
</template>

<script>
    import ProductGallery from '@/components/ProductGallery.vue'
    export default {
        components: { ProductGallery },
        name: 'Barn',
        created() {
            fetch('http://localhost:3000/products')
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.kids = data.filter(function(category) {
                        return category.productTarget === 'kids'
                    })
                })
        },
        data() {
            return {
                kids: []
            }
        }
    }
</script>

<style scoped lang="scss"></style>
