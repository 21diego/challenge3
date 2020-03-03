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
    let user = JSON.parse(window.localStorage.getItem('user'));
    if(user != null){
      this.charge(user)
    }
    db.ref('/').on('value', snapshot => {this.startDB(snapshot.val())});
  },
  updated(){
    db.ref('/').on('value', snapshot => {this.startDB(snapshot.val())});
  },
  methods:{
    ...mapMutations(['startDB','charge'])
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

