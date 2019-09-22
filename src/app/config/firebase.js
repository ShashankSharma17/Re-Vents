import firebase from 'firebase'
import 'firebase/firestore'

// Shashank web app's Firebase configuration
const firebaseConfig = {
  apiKey: '',    
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
