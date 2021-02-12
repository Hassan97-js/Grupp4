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
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-primary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style scoped lang="scss">
div.searchbar-container {
  div.inputWidth {
    width: 20%;
  }
  .text-style {
    font-size: 0.8rem;
  }
}

@media (min-width: 375px) and (max-width: 768px) {
  div.searchbar-container {
    div.inputWidth {
      width: 80%;
    }
    .input-space {
      margin-top: 2rem;
    }
  }
}
</style>
