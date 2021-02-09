<template>
  <div id="nav">
    <router-link to="/dam">Dam</router-link> |
    <router-link to="/barn">Barn</router-link> |
    <router-link to="/herr">Herr</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/login"><b-icon icon = "person" scale="1.5"></b-icon></router-link>
    
  </div>
</template>

<script>

export default {
  name: "Nav",
  
};
</script>

<style scoped lang="scss"></style>
