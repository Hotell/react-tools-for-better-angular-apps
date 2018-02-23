import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/router is optional extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import { createStoreFactory } from './config';
import rootReducer, { AppState } from './reducers';
// import { RootEpics } from './epics';

@NgModule({
  imports: [NgReduxModule /* , NgReduxRouterModule.forRoot() */],
  // providers: [RootEpics],
})
export class StoreModule {
  // constructor(
  //   public store: NgRedux<AppState>,
  //    ngReduxRouter: NgReduxRouter,
  //    devTools: DevToolsExtension,
  //    rootEpics: RootEpics
  // )
  // rootEpics: RootEpics

  constructor(public store: NgRedux<AppState>) {
    store.provideStore(createStoreFactory(rootReducer));
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
    // if (ngReduxRouter) {
    //   ngReduxRouter.initialize()
    // }

    // Enable syncing of Angular form state with our Redux store.
    // provideReduxForms(store);
  }
}
