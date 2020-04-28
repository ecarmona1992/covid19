import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3gjn3IXB5sO4j5SPALgHUTzS9aKhpuF0",
    authDomain: "covid19-32edb.firebaseapp.com",
    databaseURL: "https://covid19-32edb.firebaseio.com",
    projectId: "covid19-32edb",
    storageBucket: "covid19-32edb.appspot.com",
    messagingSenderId: "1071467114958",
    appId: "1:1071467114958:web:5ba8540f20a7acc3e97b9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;