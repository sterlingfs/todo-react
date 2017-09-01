import { ActionType } from '../actions/action-creators';

const INIT_STATE = { 
  'uid': null,
  'display': null, 
  'photoURL': null,
  'email': null,
  'credentials': null, 
  'signinError': null 
}

export default function auth(state = INIT_STATE, action) {
  switch (action.type) {
    case ActionType.fetchUser:
      return { ...state, 'credentials': action.payload };
    case ActionType.fetchUserSuccess:
      return { ...state };
    case ActionType.authStateChanged:
      return { ...state, ...action.payload };
    case ActionType.fetchUserFailure:
      return { ...state, 'signinError': action.payload };
    default:
      return state;
  }
}