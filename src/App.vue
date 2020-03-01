<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import {db} from '@/firebase'
import {mapMutations} from 'vuex'

export default {
  name: 'App',
  components:{
    Navbar
  },
  created(){
      db.ref('/').on('value', snapshot => {this.startDB(snapshot.val())});
  },
  methods:{
    ...mapMutations(['startDB'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
