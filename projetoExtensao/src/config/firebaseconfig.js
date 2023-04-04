import firebase from "firebase";
import "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBAob8YRT0Aw--jSKUnDyylaVIZ0AVVbh8",
  authDomain: "projeto-integrador-7483e.firebaseapp.com",
  projectId: "projeto-integrador-7483e",
  storageBucket: "projeto-integrador-7483e.appspot.com",
  messagingSenderId: "870623410304",
  appId: "1:870623410304:web:214bb2c846f5dc6b1f0e65",
  measurementId: "G-XG4TZZZFZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = firebase.firestore()
export default database
