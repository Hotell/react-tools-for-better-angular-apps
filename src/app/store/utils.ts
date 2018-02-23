import { createSelector } from 'reselect';
import { combineReducers, ReducersMapObject } from 'redux';

const isString = (val: any): val is string => typeof val === 'string';

export function createFeatureSelector<T>(featureName: string) {
  if (!isString(featureName)) {
    throw new Error(`createFeatureSelector: featureName is not a string --> '${featureName}'`);
  }

  return createSelector((state: any) => state[featureName], (featureState: T) => featureState);
}

export function registerFeatureStore<T extends string>(id: T, reducers: ReducersMapObject) {
  return {
    [id]: combineReducers(reducers),
  };
}
