// @ISSUE:
// https://github.com/thymikee/jest-preset-angular/issues/128

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'test-wrapper',
  template: `<pizza-item [name]="name" [toppings]="toppings"></pizza-item>`,
})
class TestWrapperComponent {
  name: string;
  toppings: string[];
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pizza-item',
  template: `
     <h3>{{name}}</h3>
    <ul><li *ngFor="let toppingName of toppings">{{toppingName}}</li></ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaItemComponent {
  @Input() name = '';
  @Input() toppings: string[] = [];
}

describe('PizzaItemComponent', () => {
  let component: PizzaItemComponent;
  let fixture: ComponentFixture<PizzaItemComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({ declarations: [PizzaItemComponent] })
        .overrideComponent(PizzaItemComponent, {
          set: { changeDetection: ChangeDetectionStrategy.Default },
        })
        .compileComponents();
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

  it(`should snapshot pizza name @Input`, () => {
    component.name = 'Chilli pizza';

    expect(fixture).toMatchSnapshot();

    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  it(`should reflect toppings @Input() via *ngFor`, () => {
    component.toppings = ['first'];
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();

    component.toppings = ['anchovy', 'tomato', 'chili'];
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
