import { ActivatedRouteSnapshot } from '@angular/router';
import { createSelector } from 'reselect';

import * as fromRoot from '../../../store';

import { Pizza } from '../../models';

import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromToppings from './toppings.selectors';

export const getPizzaState = createSelector(
  fromFeature.selectProductsState,
  (state: fromFeature.ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);

// const getActivatedRoute = (state: any, props:{ route: ActivatedRouteSnapshot }) => state.todoLists[props.listId].todos;

// const makegetSelectedPizza = () => {
//   return createSelector([getPizzasEntities, getActivatedRoute], (visibilityFilter, todos) => {
//     switch (visibilityFilter) {
//       case 'SHOW_COMPLETED':
//         return todos.filter((todo) => todo.completed);
//       case 'SHOW_ACTIVE':
//         return todos.filter((todo) => !todo.completed);
//       default:
//         return todos;
//     }
//   });
// };

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  // fromRoot.getRouterState,
  fromRoot.getCurrentRoute,
  (entities, router): Pizza => {
    return router.params && entities[router.params.pizzaId];
  }
);

export const getPizzaVisualised = createSelector(
  getSelectedPizza,
  fromToppings.getToppingEntities,
  fromToppings.getSelectedToppings,
  (pizza, toppingEntities, selectedToppings) => {
    const toppings = selectedToppings.map((id) => toppingEntities[id]);
    return { ...pizza, toppings };
  }
);

export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
});

export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
