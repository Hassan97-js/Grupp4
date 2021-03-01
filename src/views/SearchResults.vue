<template>
  <!-- Saxat koden från product gallery -->
  <div class="filteredGallery">
    <b-card
      v-for="product in $store.state.filteredSearch"
      :key="product.id"
      :img-src="require('../assets/' + product.img)"
      img-alt="Image"
      img-top
      style="max-width: 20rem"
      class="mb-2 product-card"
    >
      <div class="h2 mb-0">
        <b-icon
          icon="heart-fill"
          class="favourite rounded bg-light p-2"
          variant="dark"
        ></b-icon>
      </div>
      <span v-if="product.onSale === true" class="sale bg-danger">- 30%</span>
      <b-row class="product-type">
        <b-card-text class="title">
          {{ product.productType }}
        </b-card-text>
      </b-row>
      <b-row class="price-cart">
        <b-card-text class="price"> {{ product.price }} SEK </b-card-text>

        <b-button href="#" variant="primary" class="addToCart"
          ><b-icon class="icon" icon="cart3" variant="secondary"></b-icon
        ></b-button>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SearchResults',
  data() {
    return {}
  },
  // Samma methods och computed som i Searchbar
  methods: {
    ...mapActions(['SET_SEARCH']),
    ...mapGetters(['getSearch', 'getFilteredSearch'])
  },
  computed: {
    filteredSearch() {
      return this.$store.getters.getFilteredSearch
    },
    search: {
      get() {
        return this.$store.state.search
      },
      set(value) {
        return this.$store.dispatch('filteredProducts', value)
      }
    }
  },
  async created() {
    await this.$store.dispatch('getProductInfo')
  }
}
</script>

<style lang="scss" scoped>
div.filteredGallery {
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
