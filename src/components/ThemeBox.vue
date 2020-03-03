<template>
  <div :id="theme">
   <a @click="routeGame"><img :src="completed()"></a>
   <h2>{{theme}}</h2>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "ThemeBox",
  props: ["theme"],
  computed:{
    ...mapState(['user','categ','Temas'])
    
  },
  methods:{
    routeGame(){
      this.$router.push({path:'/'+this.categ+'/'+this.theme}).catch(err =>{});
    },
    completed(){
      let progreso = this.user.progreso;
      if(progreso != null && progreso[this.categ] != null && progreso[this.categ][this.theme] != null){
        return this.Temas[this.categ].temario[this.theme].imgState.complete
      }
      else {
        return this.Temas[this.categ].temario[this.theme].imgState.incomplete;
      }
    }
  }
}
</script>

<style>

</style>
