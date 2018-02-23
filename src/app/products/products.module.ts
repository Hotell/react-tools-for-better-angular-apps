import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';

export const ROUTES: Routes = [
  {
    path: '',
    // canActivate: [fromGuards.PizzasGuard],
    component: ProductsComponent,
  },
  // {
  //   path: 'new',
  //   canActivate: [fromGuards.PizzasGuard, fromGuards.ToppingsGuard],
  //   component: fromContainers.ProductItemComponent,
  // },
  // {
  //   path: ':pizzaId',
  //   canActivate: [fromGuards.PizzaExistsGuards, fromGuards.ToppingsGuard],
  //   component: fromContainers.ProductItemComponent,
  // },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
