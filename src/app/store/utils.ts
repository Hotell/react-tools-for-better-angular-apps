import { createSelector } from 'reselect';

const isString = (val: any): val is string => typeof val === 'string';

export function createFeatureSelector<T>(featureName: string) {
  if (!isString(featureName)) {
    throw new Error(`createFeatureSelector: featureName is not a string --> '${featureName}'`);
  }

  return createSelector((state: any) => state[featureName], (featureState: T) => featureState);
}
