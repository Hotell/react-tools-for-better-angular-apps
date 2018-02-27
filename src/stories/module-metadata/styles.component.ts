import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'storybook-styles',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../assets/css/style.css'],
})
export class StylesComponent {}
