<template>
  <div class="about">
    <about-page />
  </div>
</template>

<script>
import aboutPage from "../components/aboutPage.vue";
export default {
  name: "About",

  components: {
    aboutPage,
  },
};
</script>

<style scoped lang="scss">
/* div.about {
  height: 100vh;
} */
</style>
