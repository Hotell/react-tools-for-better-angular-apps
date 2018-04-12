import { NgModule } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { PROVIDERS } from './core';
import { TitleComponent } from './core/components';

const moduleMocks: NgModule = {
  declarations: [TitleComponent],
  providers: [PROVIDERS],
};
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, moduleMocks.declarations],
      providers: moduleMocks.providers,
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    expect(fixture).toMatchSnapshot();
  }));
});
