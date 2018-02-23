import { ReducersMapObject } from 'redux';

import * as fromRouter from './router.reducer';
import * as fromCount from './count.reducer';

export interface State {
  router: fromRouter.State;
  count: fromCount.State;
}

export const reducer: ReducersMapObject = {
  router: fromRouter.reducer,
  count: fromCount.reducer,
};

export const getCount = (state: State) => state.count;
export const getRouter = (state: State) => state.router;
