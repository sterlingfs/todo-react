import { ActionType } from '../actions/action-creators';

const INIT_STATE = { 
  'category': null
}

export default function router(state = INIT_STATE, action) {
  switch (action.type) {
    case ActionType.routeChanged:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}