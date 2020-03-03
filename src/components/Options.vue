<template>
    <div class="container-fluid">
        <h3>SETTINGS</h3>
        <div>
        <p>MUSIC</p>
        <button v-if="isPlaying" @click="pause" class="bg-green rounded text-white font-bold hover:bg-green-dark px-4 py-2">OFF</button>
        <button v-else @click="play"  class="bg-green rounded text-white font-bold hover:bg-green-dark px-4 py-2">ON</button>
        </div>
        <div>
            <button class="bg-green rounded text-white font-bold hover:bg-green-dark px-4 py-2" @click.prevent="signOut">SIGN OUT</button>
        </div>
         <div>
            <input type="text" name="changename" class="bg-green rounded text-black font-bold hover:bg-green-dark px-4 py-2" v-model="change">
            <button class="bg-green rounded text-white font-bold hover:bg-green-dark px-4 py-2" @click.prevent="changename">CAMBIAR NOMBRE</button>
        </div>
        <div>
            <input type="file" @change.prevent="changeimage" class="bg-green rounded text-black font-bold hover:bg-green-dark px-4 py-2">
            <button class="bg-green rounded text-white font-bold hover:bg-green-dark px-4 py-2" @click.prevent="subimg">CAMBIAR FOTO DE PERFIL</button>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
import {app} from "@/firebase";
export default {
 name: "Options",
 data() {
     return {
         current: {},
         index: 0,
         isPlaying: false,
         change: '',
         img: '',
         song: [
             {
                 src: require('../assets/audio/kahoot.mp3')
             },
             {
                 src: require('../assets/audio/electronica.mp3')
             },
             {
                 src: require('../assets/audio/tusa.mp3')
             },
             {
                 src: require('../assets/audio/8bits.mp3')
             }
         ],
         player: new Audio()
     }
 },
 computed: {
   ...mapState(['user'])
 },
 methods : {
     ...mapMutations(['reset','changeuser','changeimg']),
     signOut() {
      app
        .auth()
        .signOut()
        .then(() => {
          this.reset()
          this.$router.push({
            path: "/"
          })
        })
    },
     changename() {
        let name = this.change 
        this.changeuser(name) 
     },
     changeimage(e) {
        let file = e.target.files[0];
        this.img = file;
     },
     subimg() {
        let image = this.img 
        this.changeimg(image);
     },
     play (song) {
         if (typeof song.src != "undefined"){
             this.current = song;
             this.player.src = this.current.src;
         }
         this.player.play();
         this.isPlaying = true;
     },
     pause (){
         this.player.pause();
         this.isPlaying = false;
     }
 },
 created () {
     this.current = this.song[this.index];
     this.player.src = this.current.src;
 }
}
</script>
