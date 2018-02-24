import { combineReducers } from 'redux';

import * as fromActions from '../actions';

export type State = number;
const initialState: State = 0;

export const reducer = (state = initialState, action: fromActions.Action) => {
  switch (action.type) {
    case fromActions.INC:
      return state + 1;
    case fromActions.DEC:
      return state - 1;
    default:
      return state;
  }
};
