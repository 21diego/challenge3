<template>
  <div class="home">
    
    <Userbar></Userbar>
    <div class="card">DEBE INICIAR SESION</div>
    <Contenedor></Contenedor>
    <button @click="routeTopics" class="btn btn-success">PLANTAR!</button>
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
    routeTopics(){
      this.saveCat(document.querySelector(".is-active>div>h4").getAttribute("id"));
      this.$router.push({path: '/topics'}).catch(err => {});
    }
  }
}
</script>
