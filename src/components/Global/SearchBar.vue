<template>
  <div class="searchbar-container">
    <span class="text-muted mr-4 text-style">Home delivery 59:-</span>
    <span class="text-muted text-style">Member - Free delivery over 500:-</span>
    <div class="input-group mt-md-5 mx-auto inputWidth input-space">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        aria-label="Sök"
        aria-describedby="button-addon2"
        v-model="search"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          @click="submit()"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SearchBar',
  data() {
    return {
      products: []
    }
  },
  methods: {
    submit() {
      this.$router.push({ name: 'Search' })
    },
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
    // filteredProducts() {
    //         if (this.$store.state.allProducts === null) {
    //             return []
    //         }
    //         return this.$store.state.allProducts.filter((product) => {
    //             return product.productType.match(this.search)
    //         })
    //     }

    // search: {
    //   get() {
    //     return this.$store.state.search
    //   },
    //   set(search) {
    //     this.$store.commit('setSearch', search)
    //   }
    // }
  },
  async created() {
    await this.$store.dispatch('getProductInfo')
  }
}
</script>

<style scoped lang="scss">
div.searchbar-container {
  div.inputWidth {
    width: 35%;
  }
  .input-space {
    margin: 2rem 0;
  }
  .text-style {
    font-size: 0.8rem;
  }
}

@media (min-width: 0px) and (max-width: 576px) {
  div.searchbar-container {
    div.inputWidth {
      width: 80%;
    }
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  div.searchbar-container {
    div.inputWidth {
      width: 60%;
    }
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  div.searchbar-container {
    div.inputWidth {
      width: 65%;
    }
  }
}
</style>
