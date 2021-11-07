import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBA7E9V9Kr1q_maChO0q-5lLHVmIVCQ9Nc",
  authDomain: "instagram-e6571.firebaseapp.com",
  projectId: "instagram-e6571",
  storageBucket: "instagram-e6571.appspot.com",
  messagingSenderId: "582527099873",
  appId: "1:582527099873:web:2e14c186c2f0ce9090e8a0"
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };