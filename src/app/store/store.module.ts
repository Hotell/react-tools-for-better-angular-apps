import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/router is optional extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, routerReducer, NgReduxRouter } from '@angular-redux/router';
import { combineReducers, Reducer } from 'redux';

// Redux ecosystem stuff.
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import { createStoreFactory } from './config';
import { registerFeatureStore } from './utils';

import * as fromRoot from './reducers';
import * as fromProducts from '../products/store';

import { EpicsModule, RootEpic } from './epics.module';

export interface State extends fromRoot.State {
  products: fromProducts.ProductsState;
}

const rootReducer = combineReducers<State>({
  ...fromRoot.reducer,
  ...registerFeatureStore(fromProducts.STORE_ID, fromProducts.reducers),
});

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule.forRoot(), EpicsModule],
})
export class StoreModule {
  constructor(public store: NgRedux<fromRoot.State>, ngReduxRouter: NgReduxRouter, rootEpics: RootEpic) {
    const epicsEnhancers = createEpicMiddleware(rootEpics.getEpic());
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.provideStore(createStoreFactory(rootReducer, undefined, [epicsEnhancers]));

    // Enable syncing of Angular router state with our Redux store.
    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }
  }
}
