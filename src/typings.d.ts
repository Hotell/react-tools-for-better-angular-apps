/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__<R>(a: R): R;
}
