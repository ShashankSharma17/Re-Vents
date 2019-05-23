import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBdycS-ev8PsirXNdpCs2ufID8KGX5ylgg',
  authDomain: 're-vents-241317.firebaseapp.com',
  databaseURL: 'https://re-vents-241317.firebaseio.com',
  projectId: 're-vents-241317',
  storageBucket: 're-vents-241317.appspot.com',
  messagingSenderId: '602301689743',
  appId: '1:602301689743:web:0ce047f8886ca7cb'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()

const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)

export default firebase
