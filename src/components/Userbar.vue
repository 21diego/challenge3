<template>
  <div id="contenedor" class="container d-flex align-items-center justify-content-between" v-if="user.name">
    <img id="picture" :src="user.photo">
    <div id="username">
      <h2>{{user.name}}</h2>
    </div>
    <div id="medal">
      <img src="@/assets/medal.png" alt="">
    </div>
  </div>
  <div id="contenedor" class="container d-flex align-items-center justify-content-between" v-else>
    <img id="picture" src="@/assets/account.png">
    <div id="medal">
      <button @click="routeLog" class="btn btn-success">Log in</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: "Userbar",
    computed: {
      ...mapState(['user'])
    },
    methods:{
      routeLog(){
        this.$router.push({path: '/log'}).catch(err => {});
      }
    }
  }

</script>

<style scoped>
#contenedor {
  height: 70px;
  background-color: rgb(96, 252, 179);
}
#picture{
  border-radius: 50%;
  background-color: rgb(214, 231, 203);
  height: 60px;
  width: 60px;
}
#medal{
  width: 70px
}
img{
  width: 100%;
}
</style>