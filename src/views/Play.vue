<template>
  <div>
    <div class="container d-flex justify-content-between mt-4">
      <h2>{{categ}}</h2>
      <button @click="goBack" class="btn btn-danger">BACK</button>
    </div>
    
  </div>
</template>

<script>
import { mapState} from 'vuex'
  export default {
    name: 'Play',
    computed:{
      ...mapState(['categ'])
    },
    methods:{
      goBack(){
        this.$router.push({path: '/'}).catch(err => {});
      }
    }
  }
</script>

<style scoped>

</style>