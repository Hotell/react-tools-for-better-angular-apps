/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module '@storybook/addon-knobs*';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__<R>(a: R): R;
}
