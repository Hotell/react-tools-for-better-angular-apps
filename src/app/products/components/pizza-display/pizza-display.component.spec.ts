import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { AnimationTriggerMetadata } from '@angular/animations';

import { PizzaDisplayComponent } from './pizza-display.component';
import { Pizza, Topping } from '../../models';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(`${PizzaDisplayComponent.name}`, () => {
  let component: PizzaDisplayComponent;
  let fixture: ComponentFixture<PizzaDisplayComponent>;
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
        declarations: [PizzaDisplayComponent],
        imports: [NoopAnimationsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display pizza`, () => {
    component.pizza = pizzaMock;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it(`should display pizza with toppings`, () => {
    const pizza = {
      ...pizzaMock,
      toppings: toppingsMock,
    };
    component.pizza = pizza;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
    expect(component.pizza.toppings).toEqual(toppingsMock);
  });
});
