import { combineReducers } from 'redux';

import * as fromActions from '../actions';

export interface AppState {
  count: number;
}
const initialState: AppState = {
  count: 0,
};

const reducer = (state = initialState, action: fromActions.Action) => {
  switch (action.type) {
    case fromActions.INC:
      return { ...state, count: state.count + 1 };
    case fromActions.DEC:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const getCount = (state: AppState) => state.count;

// export default combineReducers({ root: reducer });
export default reducer;
