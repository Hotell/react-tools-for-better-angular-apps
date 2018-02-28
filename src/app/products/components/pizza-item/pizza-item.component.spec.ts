import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTests, ConfigureFn } from '../../../../modules/testing';

import { Pizza, Topping } from '../../models';

import { PizzaItemComponent } from './pizza-item.component';
import { pizzaMock } from './pizza-item.mocks';

describe(`${PizzaItemComponent.name}`, () => {
  let component: PizzaItemComponent;
  let fixture: ComponentFixture<PizzaItemComponent>;

  beforeEach(
    async(() => {
      const configure: ConfigureFn = (testBed) => {
        testBed.configureTestingModule({
          imports: [RouterTestingModule],
          declarations: [PizzaItemComponent],
          schemas: [NO_ERRORS_SCHEMA],
        });
      };

      configureTests(configure).then((testBed) => {
        fixture = testBed.createComponent(PizzaItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display pizza toppings`, () => {
    component.pizza = pizzaMock;

    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
