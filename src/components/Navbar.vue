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
a{
  height: 50px;
  margin-top: 10px;
}
#nav{
  background-color: white;
}
  img {
    width: 35px;
  }
  @keyframes zoom {
    from{
      transform: scale3d(1, 1, 1.8);
    }
  }
  .router-link-exact-active {
    transform: scale(1.8);
    animation: zoom .5s;
  }
</style>