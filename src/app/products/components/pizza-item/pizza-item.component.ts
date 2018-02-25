import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Pizza } from '../../models';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pizza-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-item.component.scss'],
  template: `
    <div *ngIf="pizza" class="pizza-item">
      <a [routerLink]="['/products', pizza.id]">
        <pizza-display
          [pizza]="pizza">
        </pizza-display>
        <h4>{{ pizza.name }}</h4>
        <button type="button" class="btn btn__ok">
          View Pizza
        </button>
      </a>
    </div>
  `,
})
export class PizzaItemComponent {
  @Input() pizza: Pizza = {};
}
