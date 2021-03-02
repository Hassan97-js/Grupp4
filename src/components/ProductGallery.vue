<template>
    <div class="productGallery">
        <b-card
            v-for="product in products"
            :key="product.id"
            :img-src="require('../assets/' + product.img)"
            img-alt="Image"
            img-top
            style="max-width: 20rem"
            class="mb-2 product-card"
        >
            <div class="h2 mb-0">
                <b-button
                    @click="addToFaves(product)"
                    id="fave-button"
                    class="favourite"
                    size="sm"
                    variant="outline-primary"
                >
                    <b-icon icon="heart-fill" variant="dark"></b-icon>
                </b-button>
            </div>
            <span v-if="product.onSale === true" class="sale bg-danger"
                >- 30%</span
            >
            <router-link
                :to="{
                    name: 'ProductPage',
                    params: { id: product.id }
                }"
            >
                <b-row class="product-type">
                    <b-card-text class="title">
                        {{ product.productType }}
                    </b-card-text>
                </b-row>
            </router-link>
            <b-row class="price-cart">
                <b-card-text class="price">
                    {{ product.price }} SEK
                </b-card-text>

                <b-button
                    :to="{ name: 'ProductPage', params: { id: product.id } }"
                    variant="primary"
                    class="addToCart"
                    ><b-icon
                        class="icon"
                        icon="cart3"
                        variant="secondary"
                    ></b-icon
                ></b-button>
            </b-row>
        </b-card>
        <b-modal id="mustLogIn" hide-header ok-only button-size="sm" size="sm"
            >Please log in to add favourites</b-modal
        >
        <b-modal id="added" hide-header hide-footer size="sm"
            >Added to favourites!
            <b-icon
                icon="heart-fill"
                animation="throb"
                variant="danger"
                font-scale="1.5"
            ></b-icon>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'ProductGallery',
        data() {
            return {}
        },
        methods: {
            addToFaves(product) {
                console.log(product.productType)
                if (localStorage.getItem('username')) {
                    this.$bvModal.show('added')
                    setTimeout(() => this.$bvModal.hide('added'), 1500)
                    this.$store.commit('addToFavourites', {
                        username: localStorage.getItem('username'),
                        product: product
                    })
                } else {
                    this.$bvModal.show('mustLogIn')
                }
            }
        },

        props: {
            products: {
                type: Array
            }
        }
    }
</script>
<style scoped lang="scss">
    div.productGallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 50px;
    }
    div.card.mb-2.product-card {
        min-width: 290px;
    }
    img.card-img-top {
        width: 100%;
        height: 40vh;
        object-fit: contain;
    }
    div.productGallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 50px;
    }
    .price-cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px;
    }
    .product-type {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        font-weight: bold;
        text-transform: capitalize;
    }
    .product-card {
        padding: 10px;
        margin: 10px;
    }
    p.card-text.price {
        margin: 0;
    }
    .sale {
        position: absolute;
        left: 80%;
        top: 6%;
        width: 50px;
        text-align: center;
        height: 30px;
        line-height: 8px;
        border-radius: 75px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: bold;
    }
    .favourite {
        position: absolute;
        right: 83%;
        top: 6%;
        width: 40px;
    }
</style>
