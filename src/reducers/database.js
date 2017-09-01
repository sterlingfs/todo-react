import { ActionType } from '../actions/action-creators';

const INIT_STATE = { 
  'inbox': null,
  'next': null,
  'anytime': null,
  'someday': null,
  'complete': null
}

export default function tasks(state = INIT_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

