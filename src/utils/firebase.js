import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUT_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
}

firebase.initializeApp(config)

export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()