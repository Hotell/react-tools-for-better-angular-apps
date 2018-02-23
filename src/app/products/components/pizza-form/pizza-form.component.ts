import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { map } from 'rxjs/operators';

import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pizza-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-form.component.scss'],
  template: `
    <div class="pizza-form">
      <form [formGroup]="form">

        <label>
          <h4>Pizza name</h4>
          <input
            type="text"
            formControlName="name"
            placeholder="e.g. Pepperoni"
            class="pizza-form__input"
            [class.error]="nameControlInvalid">
          <div
            class="pizza-form__error"
            *ngIf="nameControlInvalid">
            <p>Pizza must have a name</p>
          </div>
        </label>

        <ng-content></ng-content>

        <label>
          <h4>Select toppings</h4>
        </label>
        <div class="pizza-form__list">

          <pizza-toppings
            [toppings]="toppings"
            formControlName="toppings">
          </pizza-toppings>

        </div>

        <div class="pizza-form__actions">
          <button
            type="button"
            class="btn btn__ok"
            *ngIf="!exists"
            (click)="createPizza(form)">
            Create Pizza
          </button>

          <button
            type="button"
            class="btn btn__ok"
            *ngIf="exists"
            (click)="updatePizza(form)">
            Save changes
          </button>

          <button
            type="button"
            class="btn btn__warning"
            *ngIf="exists"
            (click)="removePizza(form)">
            Delete Pizza
          </button>
        </div>

      </form>
    </div>
  `,
})
export class PizzaFormComponent implements OnChanges {
  exists = false;

  @Input() pizza: Pizza;
  @Input() toppings: Topping[];

  @Output() selected = new EventEmitter<Pizza>();
  @Output() create = new EventEmitter<Pizza>();
  @Output() update = new EventEmitter<Pizza>();
  @Output() remove = new EventEmitter<Pizza>();

  form = this.fb.group({
    name: ['', Validators.required],
    toppings: [[]],
  });

  constructor(private fb: FormBuilder) {
    this.updateToppings();
  }

  get nameControl() {
    // tslint:disable-next-line:no-non-null-assertion
    return this.form.get('name')!;
  }
  get toppingsControl() {
    // tslint:disable-next-line:no-non-null-assertion
    return this.form.get('toppings')!;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError('required') && this.nameControl.touched;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.pizza && this.pizza.id) {
      this.exists = true;
      this.form.patchValue(this.pizza);
    }
  }

  createPizza(form: FormGroup) {
    this.markFieldGroupChildrenAsTouched(form);
    const { value, valid } = form;
    if (valid) {
      this.create.emit(value);
    }
  }

  updatePizza(form: FormGroup) {
    const { value, valid, touched } = form;
    if (touched && valid) {
      this.update.emit({ ...this.pizza, ...value });
    }
  }

  removePizza(form: FormGroup) {
    const { value } = form;
    this.remove.emit({ ...this.pizza, ...value });
  }

  private updateToppings() {
    this.toppingsControl.valueChanges
      .pipe(map((toppings) => toppings.map((topping: Topping) => topping.id)))
      .subscribe((value) => this.selected.emit(value));
  }

  private markFieldGroupChildrenAsTouched(form: FormGroup) {
    // @TODO note that will not mark children as touched! BUG REPORT !!!
    form.markAsTouched();
    // we need to explicitly iterate over controlls and mark them as touched
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
