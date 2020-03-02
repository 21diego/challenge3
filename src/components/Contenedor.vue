<template>
  <div id="wrap" class="container align-middle">
    <hooper>
      <slide v-for="(cat,key) in Temas" :key="cat.id">
        <Mundo :category="key"></Mundo>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
  
</template>

<script>
import {mapState,mapMutations} from 'vuex'
import Mundo from '@/components/Mundo.vue'
import { Hooper,Slide,Navigation as HooperNavigation} from 'hooper';
import 'hooper/dist/hooper.css';

  export default {
    name: 'Contenedor',
    components: {
      Mundo, Hooper, Slide, HooperNavigation
    },
    computed:{
      ...mapState(['user','Temas'])
    },
    methods:{
    }
  }
</script>

<style scoped>
.hooper{
  height: 85%;
}
@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
.is-current div{
  -webkit-animation: zoomIn 1s;
  animation: zoomIn 1s;
}
#wrap{
  margin-top: 15%;
  height: 350px;
}

#worldbox{
  width: 70%;
  margin-top: 15%
}
</style>