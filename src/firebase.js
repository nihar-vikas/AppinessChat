import firebase from 'firebase';
import { message } from 'antd';

const firebaseConfig = {
  apiKey: 'AIzaSyDVi5CECBxS9GkazF6ZYCKmLrKsHfdBDrA',
  authDomain: 'appinesschat.firebaseapp.com',
  projectId: 'appinesschat',
  storageBucket: 'appinesschat.appspot.com',
  messagingSenderId: '8765368084',
  appId: '1:8765368084:web:b20edc568d97617ae5c401',
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const signInWithGoogle = async (type) => {
  try {
    const res = await auth.signInWithPopup(type === 'google' ? googleProvider : facebookProvider);
    const { user } = res;
    const query = await db
      .collection('users')
      .where('uid', '==', user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection('users').add({
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    message.error(err.message);
  }
};

const logout = async () => {
  await auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  logout,
};
