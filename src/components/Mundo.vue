<template>
  <div id="worldbox" class="container">
    <h4 :id="category">{{category.substr(2)}}: {{user.progreso.arboles[cat]}}</h4>
    <img class="world" :src="Temas[category].imgWorld" alt="Temas[cat]-img">
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
  export default {
    name: 'Mundo',
    props: ['category'],
    data(){
      return{
        cat:this.category.substr(2).toLowerCase()
      }
    },
    computed:{
      ...mapState(['user','Temas'])
    },
    methods:{
      ...mapMutations(['saveCat'])
    }
  }
</script>

<style scoped>

.world{
  width: 100%;
}
</style>