import { Store, applyMiddleware, createStore, Action, StoreCreator, Reducer, compose, Middleware } from 'redux';
import { createLogger } from 'redux-logger';

import { environment } from '../../environments/environment';

import { actionToPlainObject } from './middleware';

const IS_DEV = !environment.production;

const composeEnhancers = (IS_DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const getMiddleware = (customMiddlewares: Middleware[] = []) => {
  const middleware = IS_DEV
    ? [
        actionToPlainObject,
        // - Enable additional logging
        createLogger({ collapsed: true }),
        // - Enable state immutability checker
        // immutableStateInvariant(),
        ...customMiddlewares,
      ]
    : [actionToPlainObject as any, ...customMiddlewares];

  return composeEnhancers(applyMiddleware(...middleware));
};

export const createStoreFactory = <S>(rootReducer: Reducer<S>, preloadState?: S, middleware: Middleware[] = []) => {
  const enhancers = getMiddleware(middleware);
  const store = createStore(rootReducer, preloadState as any, enhancers);

  return store;
};
