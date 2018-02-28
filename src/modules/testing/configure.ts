import { TestBed, getTestBed } from '@angular/core/testing';

export type ConfigureFn = (testBed: typeof TestBed) => void;
export const configureTests = (configure: ConfigureFn) => {
  const compilerConfig = { preserveWhitespaces: false } as any;

  // const testBed = getTestBed();

  const configuredTestBed = TestBed.configureCompiler(
    compilerConfig
    /* {
    providers: [
      {provide: ComponentFixtureAutoDetect, useValue: true},
    ]
  } */
  );

  configure(configuredTestBed);

  return configuredTestBed.compileComponents().then(() => configuredTestBed);
};
