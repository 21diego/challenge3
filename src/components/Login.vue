<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Iniciar Sesion</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="POST" @submit.prevent="mail">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Contraseña</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4 mx-auto">
                  <button type="sumbit" class="btn btn-outline-primary mr-3">Iniciar Sesion</button>
                  <button @click="google()" class="btn btn-outline-primary mr-3">Iniciar con Google</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { app,db } from "@/firebase";
import firebase from 'firebase';
import {mapState, mapMutations} from 'vuex'

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  computed:{
    ...mapState(['Usuarios'])
  },
  methods: {
    ...mapMutations(['charge']),
    google(){
      let provider = new firebase.auth.GoogleAuthProvider();
      app.auth().signInWithPopup(provider)
      .then(data => {
        let id = data.user.uid;
        if(this.Usuarios != null && this.Usuarios[id] != null){
          this.charge(this.Usuarios[id]);
        }else{
          this.create(data.user);
        }
        this.$router.push({path: '/'}).catch(err => {});
      })
      .catch(err => {
        this.error = err.message;
      })
    },
    mail() {    
      app.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(data => {
        let id = data.user.uid;
        if(this.Usuarios != null && this.Usuarios[id] != null){
          this.charge(this.Usuarios[id]);
        }else{
          this.create(data.user);
        }
        this.$router.push({path: '/'}).catch(err => {});
      })
      .catch(err => {
        this.error = err.message;
      });
    },
    create(dataUser){
      let user = {
        id: dataUser.uid,
        name: dataUser.displayName,
        photo: dataUser.photoURL,
        progreso: {
          arboles:{
            html: 0, css:0, js:0,total:0
          },
          complete:{}
        }
      }
      db.ref('Usuarios/' + user.id).set(user);
      this.charge(user);
    }
  }
};
</script>