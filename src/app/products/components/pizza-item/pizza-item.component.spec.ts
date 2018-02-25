import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Pizza, Topping } from '../../models';
import { PizzaItemComponent } from './pizza-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe(`${PizzaItemComponent.name}`, () => {
  let component: PizzaItemComponent;
  let fixture: ComponentFixture<PizzaItemComponent>;
  const toppingsMock: Topping[] = [
    {
      id: 1,
      name: 'anchovy',
    },
    {
      id: 2,
      name: 'bacon',
    },
  ];
  const pizzaMock: Pizza = {
    id: 1,
    name: 'Pepperoni pizza',
    toppings: [],
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [PizzaItemComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display pizza toppings`, () => {
    component.pizza = pizzaMock;

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
