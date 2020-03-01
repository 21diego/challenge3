<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Registrate</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Nombre</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="form.name"
                  />
                </div>
              </div>

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
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Registrarse</button>
                  
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
import {app} from "@/firebase";
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    ...mapMutations(['charge']),
    submit() {
      app.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
      .then(data => {
        data.user.updateProfile({
        displayName: this.form.name,
        photoURL: "https://i.ibb.co/61KpV89/account.png"
        })
        this.$router.push({path: '/'}).catch(err => {});
      })
      .then(data => {})
      .catch(err => {
        this.error = err.message;
      });
    }
  },
  computed:{
    ...mapState(['registro','user'])
  }
  }
</script>