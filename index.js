import { AppRegistry } from 'react-native';
import firebase from 'firebase';

import App from './App';

const config = {
  apiKey: 'AIzaSyCwgE_iStGr75q9Vhky0o3DwxOkTQ6pE0o',
  authDomain: 'useraccount-c5c72.firebaseapp.com',
  databaseURL: 'https://useraccount-c5c72.firebaseio.com',
  projectId: 'useraccount-c5c72',
  storageBucket: 'useraccount-c5c72.appspot.com',
  messagingSenderId: '115821688184'
};
firebase.initializeApp(config);


AppRegistry.registerComponent('useraccount', () => App);
