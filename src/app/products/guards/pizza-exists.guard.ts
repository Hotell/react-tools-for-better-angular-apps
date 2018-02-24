import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { NgRedux } from '@angular-redux/store';

import { Observable } from 'rxjs/Observable';
import { tap, map, filter, take, switchMap } from 'rxjs/operators';
import * as fromStore from '../store';

import { Pizza } from '../models';

@Injectable()
export class PizzaExistsGuards implements CanActivate {
  constructor(private store: NgRedux<fromStore.ProductsState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.pizzaId, 10);
        return this.hasPizza(id);
      })
    );
  }

  hasPizza(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getPizzasEntities)
      .pipe(map((entities: { [key: number]: Pizza }) => !!entities[id]), take(1));
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getPizzasLoaded).pipe(
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadPizzas());
        }
      }),
      filter((loaded) => loaded),
      take(1)
    );
  }
}
