<template>
  <nav id="nav">
    <div class="logo">
      <img
        class="logoImg"
        src="../../assets/bootstrapLogo.png"
        alt="Bootstrap logo"
      />
    </div>
    <div class="navLinks">
      <div>
        <router-link class="link-item" to="/dam">Dam</router-link> |
        <router-link class="link-item" to="/barn">Barn</router-link> |
        <router-link class="link-item" to="/herr">Herr</router-link> |
        <router-link class="link-item" to="/about">About</router-link>
      </div>
    </div>
    <div class="userMenu d-flex align-items-center">
      <router-link class="link-item" to="/favorit">
        <b-icon class="mx-2" icon="heart-fill" variant="danger"></b-icon>
      </router-link>
      |
      <router-link class="link-item" to="/user">
        <b-icon class="mx-2" icon="person-circle" variant="secondary"></b-icon>
      </router-link>
      |
      <router-link class="link-item" to="/cart">
        <b-icon
          @click="makeItVisible"
          class="mx-2"
          icon="cart3"
          variant="secondary"
        ></b-icon>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    visible() {
      return this.$store.state.isVisible;
    }
  },
  methods: {
    makeItVisible() {
      this.visible === false
        ? this.$store.commit("setIsVisible", true)
        : this.$store.commit("setIsVisible", false);
    }
  }
};
</script>

<style scoped lang="scss">
nav#nav {
  display: flex;
  padding: 30px;
  div.logo {
    display: flex;
    justify-self: start;
    width: 50px;
    .logoImg {
      width: 100%;
    }
  }
  .navLinks {
    display: flex;
    margin: 0 auto;
    align-items: center;
    font-weight: bold;
    a.link-item {
      margin: 0 1rem;
    }
  }
  a.link-item {
    color: black;
  }
  a.router-link-exact-active {
    color: #42b983;
  }
}
</style>
