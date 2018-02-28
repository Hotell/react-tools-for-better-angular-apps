import { TestBed, getTestBed } from '@angular/core/testing';

export type ConfigureFn = (testBed: TestBed) => void;
export const configureTests = (configure: ConfigureFn) => {
  const compilerConfig = { preserveWhitespaces: false } as any;
  const testBed = getTestBed();

  testBed.configureCompiler(
    compilerConfig
    /* {
    providers: [
      {provide: ComponentFixtureAutoDetect, useValue: true},
    ]
  } */
  );

  configure(testBed);

  return testBed.compileComponents().then(() => testBed);
};
