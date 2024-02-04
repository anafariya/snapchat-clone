import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBVC33meP0nPh_LzTT_MROIywUi3hBjVf4",
    authDomain: "snapchat-clone-e9aea.firebaseapp.com",
    projectId: "snapchat-clone-e9aea",
    storageBucket: "snapchat-clone-e9aea.appspot.com",
    messagingSenderId: "232073993009",
    appId: "1:232073993009:web:4e960717faca8b100f2e10",
    measurementId: "G-EHK76GPSJE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, storage, provider}
