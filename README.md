# Angular CLI with better defaults from React ecosystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

It also adds better tooling defaults from React ecosystem, for much better and faster DX with Angular. Core remains unchanged so you get all Angular CLI benefits indefinitely 😎👌

## Project Guidelines

### Git

https://github.com/wearehive/project-guidelines#git

## Running your app

Run `yarn start` for booting up your app with dev server or `yarn start --open` and it will boot and open your browser.

If you wanna use HMR you can run `yarn start:hmr`

## Code scaffolding

Run `yarn ng g c component-name` to generate a new component.

You can also use `yarn ng g directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests via [Jest](https://facebook.github.io/jest/).

For getting code coverage execute `yarn test:coverage`

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests in chrome in watch mode via [TestCafe](https://devexpress.github.io/testcafe/).

Run `yarn e2e:ci` to execute whole test suite in all browsers

## Running Storybook

Run `yarn storybook` and go to `localhost:6006`

## Reformat whole code

> **Note:** you don't need to do this, lint-staged and husky will do that for you

You can run `yarn format` for executing prettier
and `yarn lint` for linting and fixing lint mistakes in your codebase.

## Upgrade dependencies

Run `yarn upgrade-interactive --latest` and choose what you wanna bump up!

## Example app

[Check out this branch to explore real life usage of provided tools](https://github.com/Hotell/react-tools-for-better-angular-apps/tree/example-app)

## Further help

To get more help on the Angular CLI use `yarn ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
