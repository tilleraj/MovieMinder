import firebase from 'firebase/app';
import firebaseConfig from './apiKeys.js';

const firebaseApp = () => {
  firebase.initializeApp(firebaseConfig);
};

export default firebaseApp;
