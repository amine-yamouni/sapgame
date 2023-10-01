import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD8h0cWgKZNP6q44lI4cMvlEIrxfToCzHM',
  authDomain: 'sapgame-aa086.firebaseapp.com',
  databaseURL: 'https://sapgame-aa086-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'sapgame-aa086',
  storageBucket: 'sapgame-aa086.appspot.com',
  messagingSenderId: '432593326450',
  appId: '1:432593326450:web:7eef6dcf54b2c915ab4deb',
  measurementId: 'G-R6L47B4P53',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
