import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/router is optional extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, routerReducer, NgReduxRouter } from '@angular-redux/router';
import { combineReducers, Reducer } from 'redux';

// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import { createStoreFactory } from './config';
import { registerFeatureStore } from './utils';

import * as fromRoot from './reducers';
import * as fromProducts from '../products/store';

import { RouterEpics } from './epics';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

export interface State extends fromRoot.State {
  products: fromProducts.ProductsState;
}

const rootReducer = combineReducers<State>({
  ...fromRoot.reducer,
  ...registerFeatureStore(fromProducts.STORE_ID, fromProducts.reducers),
});

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule.forRoot()],
  providers: [RouterEpics],
})
export class StoreModule {
  // constructor(
  //   public store: NgRedux<AppState>,
  //    ngReduxRouter: NgReduxRouter,
  //    devTools: DevToolsExtension,
  //    rootEpics: RootEpics
  // )
  // rootEpics: RootEpics

  constructor(public store: NgRedux<fromRoot.State>, ngReduxRouter: NgReduxRouter, routerEpics: RouterEpics) {
    const epics = combineEpics(routerEpics.getEpic());
    const epicsEnhancers = createEpicMiddleware(epics);
    store.provideStore(createStoreFactory(rootReducer, undefined, [epicsEnhancers]));
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    // store.configureStore(
    //   rootReducer,
    //   // {} as AppState,
    //   // [createLogger(), ...rootEpics.createEpics()],
    //   devTools.isEnabled() ? [devTools.enhancer()] : []
    // );

    // Enable syncing of Angular router state with our Redux store.
    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }

    // Enable syncing of Angular form state with our Redux store.
    // provideReduxForms(store);
  }
}
