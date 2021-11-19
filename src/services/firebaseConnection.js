import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyBdBooMn5uLcoV9Qy6MvGVxvu3EBLre7og",
  authDomain: "apptarefas-12756.firebaseapp.com",
  projectId: "apptarefas-12756",
  storageBucket: "apptarefas-12756.appspot.com",
  messagingSenderId: "1068370924037",
  appId: "1:1068370924037:web:136df498eb1df3faaa026c"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;