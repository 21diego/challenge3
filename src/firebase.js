import Firebase from 'firebase/firebase';

let config = {
  apiKey: "AIzaSyCiVcPIdonFHYGZ0vUiG9hcbqaAOJpTHhQ",
  authDomain: "challenge-29be5.firebaseapp.com",
  databaseURL: "https://challenge-29be5.firebaseio.com",
  projectId: "challenge-29be5",
  storageBucket: "challenge-29be5.appspot.com",
  messagingSenderId: "715492052042",
  appId: "1:715492052042:web:6499e9798b17fea509aab3",
  measurementId: "G-96TS561ZVX"
};
export const app = Firebase.initializeApp(config);
export const db = app.database();