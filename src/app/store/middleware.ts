import { Action, MiddlewareAPI, Dispatch, Middleware } from 'redux';

type MiddlewareFn<S, A extends Action> = (api: MiddlewareAPI<S>) => (next: Dispatch<S>) => (action: A) => A;

export const actionToPlainObject: MiddlewareFn<{}, Action> = (store) => (next) => (action) => {
  return next({ ...action });
};
