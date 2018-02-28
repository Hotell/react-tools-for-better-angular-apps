import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { configureTests, ConfigureFn } from '@modules/testing';

import { PizzaToppingsComponent } from './pizza-toppings.component';
import { Pizza, Topping } from '../../models';

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
      const configure: ConfigureFn = (testBed) => {
        testBed.configureTestingModule({
          declarations: [PizzaToppingsComponent],
          imports: [NoopAnimationsModule],
        });
      };

      configureTests(configure).then((testBed) => {
        fixture = testBed.createComponent(PizzaToppingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display pizza toppings`, () => {
    component.toppings = toppingsMock;

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
