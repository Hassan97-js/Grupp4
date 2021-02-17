<template>
  <div class="home">
    <!-- landing page-komponent -->
    <landing-page></landing-page>

    <!-- recension-komponent -->
    <reviews></reviews>
  </div>
</template>

<script>
import LandingPage from "@/components/LandingPage.vue";
import Reviews from "@/components/Reviews.vue";
export default {
  components: { LandingPage, Reviews },
  name: "Home"
};
</script>
<style scoped>
/* *{
  padding: 40px;
} */
</style>
