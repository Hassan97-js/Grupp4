<template>
  <div class="input-group mt-5 mx-auto inputWidth">
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      aria-label="Sök"
      aria-describedby="button-addon2"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-primary" type="button" id="button-addon2">
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style scoped lang="scss">
div.inputWidth {
  width: 40%;
}
</style>
