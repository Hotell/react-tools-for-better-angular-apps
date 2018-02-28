// @TODO: try to add ts-check
module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: 'src/tsconfig.spec.json',
    },
    __TRANSFORM_HTML__: true,
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|js|html)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  moduleFileExtensions: ['ts', 'js', 'html'],
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts',
  moduleNameMapper: {
    '@modules/(.*)': '<rootDir>/src/modules/$1',
    //     'app/(.*)': '<rootDir>/src/app/$1',
    //     'assets/(.*)': '<rootDir>/src/assets/$1',
    //     'environments/(.*)': '<rootDir>/src/environments/$1',
  },
  //   transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/.*(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    'src/(setup-jest|jest-global-mocks).ts',
  ],
};
