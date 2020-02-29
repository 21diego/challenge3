<template>
  <div>
    <div v-if="!registro.account">
      <Register></Register>
      <div @click="change">
        <p>¿Ya tienes una cuenta?</p>
      </div>
    </div>
    <div v-else>
      <Login></Login>
      <div @click="change">
        <p>¿Volver?</p>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Log',
  components: {
    Login, Register
  },
  methods:{
    ...mapMutations(['change'])
  },
  computed:{
    ...mapState(['registro'])
  }
  
}
</script>

<style scoped>
  
</style>