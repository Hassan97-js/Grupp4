<template>
  <nav id="nav">
    <div class="logo">
      <router-link to="/">
        <img
          class="logoImg"
          src="../../assets/bootstrapLogo.png"
          alt="Bootstrap logo"
        />
      </router-link>
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
      <router-link class="link-item" to="/login">
        <b-icon class="mx-2" icon="person-circle" variant="secondary"></b-icon>
      </router-link>
      |
      <b-icon
        v-b-toggle.sidebar-right
        class="mx-2 icon"
        icon="cart3"
        variant="secondary"
      ></b-icon>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav"
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
  .icon {
    cursor: pointer;
  }
}
@media (min-width: 375px) and (max-width: 768px) {
  nav#nav {
    padding: 15px;
    flex-direction: column;
    div.logo {
      justify-self: center;
      width: 100%;
      a {
        margin: 0 auto 0.8rem auto;
        .logoImg {
          width: 20%;
        }
      }
    }
    .userMenu {
      margin-top: 1rem;
      justify-content: center;
    }
  }
}
</style>
