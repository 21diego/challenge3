<template>
  <div class="quiz">
    <h2 class="bg-html">{{($route.params.cat).substr(2)}}</h2>
	  <p class="topic">{{($route.params.topic).substr(2).toUpperCase()}}</p>
    <Questions :index="index" :theme="$route.params.topic" @answer="nextq($event)" v-if="index<=5"></Questions>
    
    <template v-if="index == 6">
      <h3>Respuestas</h3>
      <p>Correctas: {{count[0]}}</p>
      <p>Incorrectas: {{count[1]}}</p>
    </template>
    <button @click="nextq">{{next}}</button>
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
</style>