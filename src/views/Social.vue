<template>
  <div class="social">
    <Userbar></Userbar>
    <Navbar></Navbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Userbar from '@/components/Userbar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Study',
  components: {
    Userbar, Navbar
  }
}
</script>