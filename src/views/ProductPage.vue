<template>
    <section v-if="products" class="product row my-5">
        <div class="modal">
            <b-modal id="size-error-modal" title="Size error">
                <p class="my-4">
                    You did not choose a size. Please choose a size.
                </p>
            </b-modal>
        </div>
        <div
            class="d-lg-flex"
            v-for="product in getRightProduct($route.params.id)"
            :key="product.id"
        >
            <div class="product-photo col-12 col-lg-6 w-100 px-0">
                <div class="photo-container w-100 h-100">
                    <div class="photo-main mb-5">
                        <img
                            class="w-50"
                            :src="require('../assets/' + product.img)"
                            alt="Product Image"
                        />
                    </div>
                    <div class="photo-album row-cols-12 text-left p-2">
                        <img
                            class="mx-2 w-25 rounded"
                            :src="require('../assets/' + product.img)"
                            alt="Product Image"
                        />

                        <img
                            class="w-25 rounded"
                            :src="require('../assets/' + product.img)"
                            alt="Product Image"
                        />
                    </div>
                </div>
            </div>
            <div class="product-info col-12 col-lg-6 text-left p-4">
                <div class="title mb-3">
                    <h1 class="product-info-title text-capitalize">
                        {{ product.productType }}
                    </h1>
                </div>
                <div class="price font-weight-bold h1 mb-3">
                    <span>{{ product.price }} :-</span>
                </div>
                <div class="product-size mb-3">
                    <h3 class="select-size">Select a size</h3>
                    <ul class="row mx-0 mb-0 py-3 pl-0 pr-3">
                        <li class="col-4 px-1 px-lg-0">
                            <button
                                @click="pushSize('Small')"
                                class="button-transition btn-focus border border-dark px-3 border-0"
                            >
                                S
                            </button>
                        </li>
                        <li class="col-4 px-0">
                            <button
                                @click="pushSize('Medium')"
                                class="button-transition btn-focus border border-dark px-3 border-0"
                            >
                                M
                            </button>
                        </li>
                        <li class="col-4 px-0">
                            <button
                                @click="pushSize('Large')"
                                class="button-transition btn-focus border border-dark px-3 border-0"
                            >
                                L
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="description mb-4">
                    <h3>Benefits</h3>
                    <ul class="text-left p-0">
                        <li>{{ product.productInfo }}</li>
                    </ul>
                </div>
                <div
                    class="row favourit w-100 mx-auto justify-content-between align-items-center"
                >
                    <button @click="addToCart" class="buy--btn btn-success">
                        Add to cart
                    </button>
                    <b-button
                        @click="addToFaves(product)"
                        class="ml-5 buy--btn"
                        variant="primary"
                    >
                        <b-icon icon="heart-fill" variant="danger"></b-icon>
                    </b-button>
                </div>
            </div>
        </div>
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
        <b-modal id="addedToCart" hide-header hide-footer size="sm"
            >Added to cart!
            <b-icon
                icon="cart-check"
                animation="cylon"
                font-scale="1.5"
            ></b-icon>
        </b-modal>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                rightProduct: null,
                id: null,
                size: null
            }
        },
        computed: {
            products() {
                return this.$store.state.allProducts
            }
        },
        created() {
            this.$store.dispatch('getProductInfo')
        },
        methods: {
            addToCart() {
                for (const item of this.$store.state.cart) {
                    if (item.id === this.id && item.size === this.size) {
                        item.counter < 10 ? item.counter++ : (item.counter = 10)
                        return
                    }
                }
                setTimeout(() => this.$bvModal.hide('addedToCart'), 1500)
                if (
                    this.size === 'Small' ||
                    this.size === 'Medium' ||
                    this.size === 'Large'
                ) {
                    this.$store.commit(
                        'pushToCart',
                        Object.assign(
                            { counter: 1, size: this.size },
                            this.rightProduct
                        )
                    )
                    this.$bvModal.show('addedToCart')
                } else {
                    this.$bvModal.show('size-error-modal')
                }
            },
            getRightProduct(id) {
                const data = this.products
                this.id = id
                return data.filter(product => {
                    const productId = product.id === id
                    if (productId) {
                        this.rightProduct = product
                    }
                    return productId
                })
            },

            // favourites
            addToFaves(product) {
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
            },
            pushSize(size) {
                this.size = size
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../scss/variables';
    .btn-focus:focus {
        background: #ee944f;
        color: #fff;
    }
    .buy--btn {
        padding: 1.2rem 2.2rem;
        border: none;
        border-radius: 7px;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 1.3px;
        color: #fff;
        box-shadow: 2px 2px 15px -7px #4c4c4c;
        &:hover {
            transition: 0.3s;
        }
        &:active {
            transform: scale(0.98);
        }
    }
    li {
        list-style: none;
    }
    h1,
    h2,
    h3,
    span {
        color: #3b386a;
    }
    .button-transition {
        &:hover {
            transition: 0.3s;
            background: #ffb17a;
        }
    }
    .product-size {
        h3 {
            font-size: 1.5rem;
        }
        ul {
            width: 80%;
        }
    }
    .description {
        h3 {
            font-size: 1.5rem;
        }
    }

    @media (min-width: 577px) and (max-width: 768px) {
        .product-info-title {
            font-size: 2rem;
        }
        .price {
            font-size: 1.9rem;
        }
        .variant {
            h3 {
                font-size: 2rem;
            }
        }
        .product-size {
            h3 {
                font-size: 2rem;
            }
            ul {
                width: 50%;
                li {
                    font-size: 1.2rem;
                }
            }
        }
        .description {
            h3 {
                font-size: 2rem;
            }
            ul {
                li {
                    font-size: 1.2rem;
                }
            }
        }
    }

    @media (min-width: 769px) and (max-width: 992px) {
        .product-info-title {
            font-size: 2.8rem;
        }
        .price {
            font-size: 2.4rem;
        }
        .variant {
            h3 {
                font-size: 2.5rem;
            }
        }
        .product-size {
            h3 {
                font-size: 2.5rem;
            }
            ul {
                width: 50%;
                li {
                    font-size: 1.4rem;
                }
            }
        }
        .description {
            h3 {
                font-size: 2.5rem;
            }
            ul {
                li {
                    font-size: 1.4rem;
                }
            }
        }
    }

    @media (min-width: 993px) {
        .product-info-title {
            font-size: 2.6rem;
        }
        .price {
            font-size: 2rem;
        }
        .variant {
            h3 {
                font-size: 2.1rem;
            }
        }
        .product-size {
            h3 {
                font-size: 2.1rem;
            }
            ul {
                width: 50%;
                li {
                    font-size: 1.2rem;
                }
            }
        }
        .description {
            h3 {
                font-size: 2.1rem;
            }
            ul {
                li {
                    font-size: 1.2rem;
                }
            }
        }
    }
</style>
