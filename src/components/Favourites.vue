<template>
    <div>
        <h1 v-if="currentUser">{{ currentUser.username }}'s favourites</h1>
        <product-gallery :products="favourites"></product-gallery>
    </div>
</template>

<script>
    import ProductGallery from './ProductGallery.vue'
    export default {
        components: { ProductGallery },
        name: 'Favourites',
        props: {
            currentUser: {
                type: Object
            }
        },
        data() {
            return {
                favourites: this.currentUser.favourites
            }
        }
    }
</script>
