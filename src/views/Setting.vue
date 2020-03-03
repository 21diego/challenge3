<template>
  <div>
    <Options></Options>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Options from '@/components/Options.vue'
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Setting',
  components:{
    Navbar, Options
  }
}
</script>