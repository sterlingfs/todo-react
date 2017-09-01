import { initializeApp, auth as Auth, database as Database } from 'firebase';
import ActionCreators, { ActionType } from '../actions/action-creators';
import DatabaseEvent from '../model/database-event';

const FirebaseApp = initializeApp({
  apiKey: "AIzaSyDAAvfxlZ790juuqH3ssRCBE5HAe_kUNfU",
  authDomain: "sterling-task.firebaseapp.com",
  databaseURL: "https://sterling-task.firebaseio.com",
  projectId: "sterling-task",
  storageBucket: "sterling-task.appspot.com",
  messagingSenderId: "718274543467"
});

export function bindAuthStateToStore(store) {
  Auth().onAuthStateChanged(user => {
    store.dispatch(ActionCreators.authStateChanged(parseUser(user)));
  });
}

export function fetch(uid, category, callback) {
  let ref = Database().ref(`task/${uid}`).orderByChild('category').equalTo(category);
  return ref.on(DatabaseEvent.VALUE, callback)
}

export const authMiddleware = store => next => action => {
  switch (action.type) {
    case ActionType.emailSignIn:
      Auth().signInWithEmailAndPassword(action.payload.email, action.payload.password)
        .then(res => next(ActionCreators.fetchUserSuccess(res)))
        .catch(err => next(ActionCreators.fetchUserFailure(err)))
      break
    case ActionType.googleSignIn:
      let provider = new Auth.GoogleAuthProvider();
      Auth().signInWithPopup(provider)
        .then(res => next(ActionCreators.googleSignInSuccess(res)))
        .catch(function(error) {
          let errorCode = error.code;
          let errorMessage = error.message;
          let email = error.email;
          let credential = error.credential;
          // ... fire the error action
      });
    default:
      break
  }
  return next(action);
}

export const databaseMiddleware = store => next => action => {
  switch (action.type) {
    default:
      break
  }
  return next(action);
}

function parseUser(user) {
  if (!user) return null;
  return {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    uid: user.uid
  }
}

const middleware = [authMiddleware, databaseMiddleware];
export default middleware;
