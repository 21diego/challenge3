<template>
  <div class="quiz">
    <h2 class="bg-html">{{($route.params.cat).substr(2)}}</h2>
	  <p class="topic">{{($route.params.topic).substr(2).toUpperCase()}}</p>
    <Questions :index="index" :theme="$route.params.topic" @answer="activate($event)" v-if="index<=5"></Questions>
    
    <template v-if="index == 6">
      <h3>Respuestas</h3>
      <p>Correctas: {{count[0]}}</p>
      <p>Incorrectas: {{count[1]}}</p>
      <p v-if="count[0] == 5">Felicidades! Completaste {{($route.params.topic).substr(2).toUpperCase()}}</p>
      <p v-else>Revisa la teoria! <span @click="gotoStudy">Click aqui!</span></p>
      <div class="box d-flex justify-content-between">
        <button class="btn btn-primary" @click="routeTopic">Volver</button>
        <button class="btn btn-primary">nose</button>
      </div>
      
    </template>
    
  </div>
  
</template>

<script>
// @ is an alias to /src
import Questions from '@/components/Questions.vue'

export default {
  name: 'Quiz',
  props:['theme'],
	data(){
	  return{
	    index: 1,count:[0,0],next:"Siguiente"
    }
  },
  components:{
    Questions
  },
  methods:{
    activate(ok){
      //Retrasa la funcion una cierta cantidad de tiempo
      var startTime = new Date().getTime();
      while (new Date().getTime() < startTime + 1000){}
      this.nextq(ok);
    },
  nextq(ok){
    let button = document.querySelectorAll('.btn')
     if(this.index==5){
       this.next="Menú"       
     }
     if(ok=="true"){
       button.forEach(e=>e.classList.remove('btn-success','active'))
       this.count[0]+=1
       this.index++
     }
     else{
       button.forEach(e=>e.classList.remove('btn-danger','active'))
      this.count[1]+=1
      this.index++       
     }
     button.forEach(e=>e.classList.add('btn-quiz','btn-secondary'));
   },
   routeTopic(){
     this.$router.push({path: '/topics'})
   },
   gotoStudy(){
     this.$router.push({path: '/study/'+this.$route.params.cat+'/'+this.$route.params.topic})
   }

  }
}
</script>
<style scoped>
  .bg-html{
	background-color: rgb(245, 127, 49);
	margin-top: 0.5em;
	margin-bottom: 0;
}
.topic{
	border: 2px black solid;
}
.btn-quiz{
	margin-bottom: 1em;
}
.box{
  width: 50%;
  margin: 0 auto;
}
</style>