<template>
<div>
	<p class="boxQ">{{index}} - {{question.pregunta}}</p>
  <button class="btn btn-quiz btn-secondary" @click="quizEvent(key)" v-for="(option,key) in question.opciones" :key="key" :id="'preg'+key" v-if="option">{{option}}</button>
</div>
</template>

<script>
import {mapState} from 'vuex';
export default {
	name:"Questions",
	props:['theme','index'],
computed:{
	 ...mapState(['user','categ','Temas']),
	 question(){
		 return this.Temas[this.categ].temario[this.theme].game[this.index]
	 }
  },
methods:{
	quizEvent(key){
	  let button = document.querySelector('#preg'+key)
		button.classList.remove('btn-secondary')
		let correct ='preg'+this.question.correcta
	 if(button.id==correct){
		 console.log("correcto")
       button.classList.add('btn-success','active');
       this.$emit('answer','true');
	 }
	 else{
		 console.log("incorrecto")
	   button.classList.add('btn-danger','active');
	   this.$emit('answer','false');
	 }
   }

  }
}
</script>

<style scoped>
.boxQ{
	width: 90%;
	font-size: 2em;
	border: 2px solid rgb(245, 127, 49);
	background-color:  rgb(247, 149, 84);
	border-radius: 0.25rem;
	margin: 0 auto;
}
button {
	margin: 0.25em 0;
}
.btn-quiz{
	width: 90%;
}
</style>