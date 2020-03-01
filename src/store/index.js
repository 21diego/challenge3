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
    charge(state,userdb){
      state.user = userdb;
    },
    startDB(state,database){
      for(let element in database){
        state[element] = database[element];
      };
    }
  },
  actions: {
  },
  modules: {
  }
})
