import * as Firebase from 'firebase';

let HAS_INITIALIZED = false;
let HAS_LOGIN = false;

const initFirebase = () => {
  if (!HAS_INITIALIZED) {
    const config = {
        apiKey: "AIzaSyDcBURc1RJHTkXHR29Z2i1ozKpLOzLXwAk",
        authDomain: "inspirmitta-korea.firebaseapp.com",
        databaseURL: "https://inspirmitta-korea.firebaseio.com",
        projectId: "inspirmitta-korea",
        storageBucket: "inspirmitta-korea.appspot.com",
        messagingSenderId: "258918181654"
    };

    Firebase.database.enableLogging(true);
    Firebase.initializeApp(config);
    HAS_INITIALIZED = true;
  }
}

const login = () => {
  if (!HAS_LOGIN) {
    Firebase.auth().signInWithEmailAndPassword("admin@admin.com","admin1234");
    HAS_LOGIN = true;
  }
}

export const getDatabase = () => {
  initFirebase();
  login();
  return Firebase.database();
}
