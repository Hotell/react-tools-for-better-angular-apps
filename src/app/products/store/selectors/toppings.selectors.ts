// import { createSelector } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as fromRoot from '../../store';
import * as fromFeature from '../reducers';
import * as fromToppings from '../reducers/toppings.reducer';

export const getToppingsState = createSelector(
  fromFeature.selectProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingEntities = createSelector(getToppingsState, fromToppings.getToppingEntities);

export const getSelectedToppings = createSelector(getToppingsState, fromToppings.getSelectedToppings);

export const getAllToppings = createSelector(getToppingEntities, (entities) => {
  return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
});

export const getToppingsLoaded = createSelector(getToppingsState, fromToppings.getToppingsLoaded);

export const getToppingsLoading = createSelector(getToppingsState, fromToppings.getToppingsLoading);
