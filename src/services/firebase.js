import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAL2R-e0VI8GgU61M1ooU7j-pN-GFjGRSM",
    authDomain: "wishlist-1384b.firebaseapp.com",
    projectId: "wishlist-1384b",
    storageBucket: "wishlist-1384b.appspot.com",
    messagingSenderId: "840532688895",
    appId: "1:840532688895:web:8b686d3b4bba6cb863b1ca"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  function signIn() {
      return auth.signInWithPopup(provider);
  }

  function logOut() {
      return auth.signOut();
  }

  export {
      auth,
      signIn,
      logOut
  }