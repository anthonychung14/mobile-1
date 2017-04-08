import Datastore from 'react-native-local-mongodb';

export const db = new Datastore({ filename: 'data' });
// Type 2: Persistent datastore with manual loading
  // , db = new Datastore({ filename: 'asyncStorageKey' });

// db.loadDatabase(function (err) {    // Callback is optional
//   // Now commands will be executed
// });

// Type 3: Persistent datastore with automatic loading
  // , db = new Datastore({ filename: 'asyncStorageKey', autoload: true });
// You can issue commands right away

