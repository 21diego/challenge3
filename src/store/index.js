import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registro:{
      account: false
    },
    user:{
      id: '',
      name:'',
      photo: '',
      progreso: {
        arboles:{
          html: 0, css:0, js:0,total:0
        },
        complete:{}
      }
    }
  },
  mutations: {
    change(state){
      state.registro.account = !state.registro.account;
    },
    preset(dataUser){

    }
  },
  actions: {
  },
  modules: {
  }
})
