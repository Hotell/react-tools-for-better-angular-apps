import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaToppingsComponent } from './pizza-toppings.component';
import { Pizza, Topping } from '../../models';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(`${PizzaToppingsComponent.name}`, () => {
  let component: PizzaToppingsComponent;
  let fixture: ComponentFixture<PizzaToppingsComponent>;
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
        declarations: [PizzaToppingsComponent],
        imports: [NoopAnimationsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display pizza toppings`, () => {
    component.toppings = toppingsMock;

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
