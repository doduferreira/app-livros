import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyA5mAHRjYg6AvmYhKXQdUsN_XSlgYSoqsM',
  authDomain: 'projeto-guardar-dinheiro.firebaseapp.com',
  projectId: 'projeto-guardar-dinheiro',
  storageBucket: 'projeto-guardar-dinheiro.appspot.com',
  messagingSenderId: '817452176848',
  appId: '1:817452176848:web:b0070b24626522786d15d5',
  measurementId: 'G-7LRSNSN1DD',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();

export default firebase;
