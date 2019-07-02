import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBqXrxgHRFQcXqXNKCQJnQlLTWrgtzAuLA",
  authDomain: "react-blog-8264a.firebaseapp.com",
  databaseURL: "https://react-blog-8264a.firebaseio.com",
  projectId: "react-blog-8264a",
  storageBucket: "react-blog-8264a.appspot.com",
  messagingSenderId: "84289926606",
  appId: "1:84289926606:web:10ca841c75201567"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;