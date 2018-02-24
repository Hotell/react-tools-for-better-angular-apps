import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import * as fromStore from '../store';
import { Pizza, Topping } from '../models';
import { createSelector } from 'reselect';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['product-item.component.scss'],
  template: `
    <div
      class="product-item">
      <pizza-form
        [pizza]="pizza$ | async"
        [toppings]="toppings$ | async"
        (selected)="onSelect($event)"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (remove)="onRemove($event)">
        <pizza-display
          [pizza]="visualise$ | async">
        </pizza-display>
      </pizza-form>
    </div>
  `,
})
export class ProductItemComponent implements OnInit {
  pizza$: Observable<Pizza>;
  visualise$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;

  constructor(private store: NgRedux<fromStore.ProductsState>, private route: ActivatedRoute) {}

  ngOnInit() {
    const { pizzaId } = this.route.snapshot.params;
    console.log({ pizzaId });

    const getSelectedPizza = createSelector(
      fromStore.getPizzasEntities,
      // fromRoot.getRouterState,
      () => this.route.snapshot,
      (entities, router): Pizza => {
        return router.params && entities[router.params.pizzaId];
      }
    );

    const getPizzaVisualised = createSelector(
      getSelectedPizza,
      fromStore.getToppingEntities,
      fromStore.getSelectedToppings,
      (pizza, toppingEntities, selectedToppings) => {
        const toppings = selectedToppings.map((id) => toppingEntities[id]);
        return { ...pizza, toppings };
      }
    );

    this.pizza$ = this.store.select(getSelectedPizza);
    this.toppings$ = this.store.select(fromStore.getAllToppings);
    this.visualise$ = this.store.select(getPizzaVisualised);

    this.pizza$
      .pipe(
        tap((pizza: Pizza = null as any) => {
          const pizzaExists = Boolean(pizza && pizza.toppings);
          // tslint:disable-next-line:no-non-null-assertion
          const toppings = pizzaExists ? pizza.toppings!.map((topping) => topping.id!) : [];
          this.store.dispatch(new fromStore.VisualiseToppings(toppings));
        })
      )
      .subscribe(console.log);
  }

  onSelect(event: number[]) {
    this.store.dispatch(new fromStore.VisualiseToppings(event));
  }

  onCreate(event: Pizza) {
    this.store.dispatch(new fromStore.CreatePizza(event));
  }

  onUpdate(event: Pizza) {
    this.store.dispatch(new fromStore.UpdatePizza(event));
  }

  onRemove(event: Pizza) {
    const remove = window.confirm('Are you sure?');
    if (remove) {
      this.store.dispatch(new fromStore.RemovePizza(event));
    }
  }
}
