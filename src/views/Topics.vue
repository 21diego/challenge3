<template>
  <div>
    <div class="container d-flex justify-content-between mt-4">
      <h2>{{categ}}</h2>
      <button @click="goBack" class="btn btn-danger">BACK</button>
      
    </div>
    <div class="container">
      <ThemeBox v-for="(value,key) in topics" :key="key" :theme="key"></ThemeBox>
    </div>
    <Navbar></Navbar>
  </div>
</template>

<script>
import { mapState} from 'vuex'
import ThemeBox from '@/components/ThemeBox.vue'
import Navbar from '@/components/Navbar.vue'
  export default {
    name: 'Topics',
    components:{
      ThemeBox,Navbar
    },
    computed:{
      ...mapState(['categ','Temas']),
      topics(){
        return this.Temas[this.categ].temario
      }
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