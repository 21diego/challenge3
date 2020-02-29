<template>
  <div>
    <router-view/>
    <div id="nav" class="d-flex justify-content-around fixed-bottom">
      <router-link to="/study"><img src="@/assets/research.png" alt=""></router-link>
      <router-link to="/"><img src="@/assets/garden.png" alt=""></router-link>
      <router-link to="/social"><img src="@/assets/group.png" alt=""></router-link>
      <router-link to="/settings"><img src="@/assets/settings.png" alt=""></router-link>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
  img {
    width: 60px;
  }
  .router-link-exact-active {
    border-top: 2px solid red;
  }
</style>