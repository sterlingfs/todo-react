export const ActionType = {
  // life cycle
  applicationMount: 'APPLICATION_MOUNT',
  // authentication
  emailSignIn: 'EMAIL_SIGN_IN',
  emailSignInSuccess: 'EMAIL_SIGN_IN_SUCCESS',
  googleSignIn: 'GOOGLE_SIGN_IN',
  googleSignInSuccess: 'GOOGLE_SIGN_IN_SUCCESS',
  fetchUser: 'FETCH_USER_PENDING',
  fetchUserSuccess: 'FETCH_USER_SUCCESS',
  // fetchUserFailure: 'FETCH_USER_FAILURE',
  authStateChanged: 'AUTH_STATE_CHANGED',
  // database
  fetchRef: 'FETCH_REF_PENDING', 
  fetchRefSuccess: 'FETCH_REF_SUCCESS', 
  fetchRefFailure: 'FETCH_REF_FAILURE', 
  // router
  routeChanged: 'ROUTE_CHANGED',
}

export default class ActionCreators {
  static applicationMount() {
    return { type: ActionType.applicationMount };
  }
  static emailSignIn(credentials) {
    return { type: ActionType.emailSignIn, payload: credentials };
  }
  static emailSignInSuccess(user) {
    return { type: ActionType.emailSignInSuccess, payload: user };
  }
  static googleSignIn() {
    return { type: ActionType.googleSignIn };
  }
  static googleSignInSuccess(user) {
    return { type: ActionType.googleSignInSuccess, payload: user };
  }
  static fetchUser() {
    return { type: ActionType.fetchUser };
  }
  static fetchUserSuccess(user) {
    return { type: ActionType.fetchUserSuccess, payload: user };
  }
  // static fetchUserFailure(error) {
  //   return { type: ActionType.fetchUserFailure, payload: error };
  // }
  static authStateChanged(user) {
    return { type: ActionType.authStateChanged, payload: user };
  }
  static fetchRef(ref) {
    return { type: ActionType.fetchRef, payload: ref };
  }
  static routeChanged(route) {
    return { type: ActionType.routeChanged, payload: route };
  }
}
