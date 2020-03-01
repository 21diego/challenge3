<template>
  <div class="home">
    
    <Userbar></Userbar>

    <Contenedor></Contenedor>
    <button @click="routePlay" class="btn btn-success">PLANTAR!</button>
    <Navbar></Navbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Userbar from '@/components/Userbar.vue'
import Navbar from '@/components/Navbar.vue'
import Contenedor from '@/components/Contenedor.vue'
import { mapState, mapMutations} from 'vuex'

export default {
  name: 'Home',
  components: {
    Userbar, Navbar, Contenedor
  },
  methods:{
    ...mapMutations(['saveCat']),
    routePlay(){
      this.saveCat(document.querySelector(".is-active>div>h4").getAttribute("id"));
      this.$router.push({path: '/play'}).catch(err => {});
    }
  }
}
</script>
