<template>
  <div id="contenedor" class="d-flex align-items-center justify-content-between">
    <div id="picture"></div>
    <div id="username">
      <h2>USER NAME</h2>
    </div>
    <div id="medal">
      <img src="@/assets/medal.png" alt="">
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: "Userbar",
    computed: {
      ...mapState(['user'])
    }
  }

</script>

<style scoped>
#contenedor {
  margin-top: 20px;
  height: 70px;
  background-color: rgb(96, 252, 179);
}
#picture{
  border-radius: 50%;
  height: 60px;
  width: 60px;
  border: 2px solid grey;
}
#medal{
  width: 70px
}
img{
  width: 100%;
}
</style>