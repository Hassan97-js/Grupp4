<template>
  <div>
    <h1>Herr</h1>
    <product-gallery :products="men"></product-gallery>
  </div>
</template>

<script>
import ProductGallery from "@/components/ProductGallery.vue";
export default {
  components: { ProductGallery },
  name: "Herr",
  created() {
    fetch("http://localhost:3000/products")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.men = data.filter(function (category) {
          return category.productTarget === "men";
        });
      });
  },
  data() {
    return {
      men: []
    };
  }
};
</script>
<style scoped lang="scss"></style>
