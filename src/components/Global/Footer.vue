<template>
  <footer class="sticky-footer">Footer</footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
footer.sticky-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: salmon;
  color: white;
  text-align: center;
  padding: 1.8rem;
}
</style>
