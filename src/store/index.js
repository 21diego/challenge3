import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registro:{
      account: false
    },
    categ: "",
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
      window.localStorage.setItem('user',JSON.stringify(userdb));
      state.user = userdb;
    },
    reset(state){
      window.localStorage.removeItem('user');
      state.user = {}
    },
    startDB(state,database){
      for(let element in database){
        state[element] = database[element];
      };
    },
    saveCat(state,cat){
      state.categ = cat;
    }
  },
  actions: {
  },
  modules: {
  }
})
