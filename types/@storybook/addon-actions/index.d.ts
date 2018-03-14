type ActionReturnFn = (...args: any[]) => void;
type ActionFn = (name: string) => ActionReturnFn;
type DecoratorFn = (args: any[]) => any[];
declare module '@storybook/addon-actions' {
  const action: ActionFn;
  const decorateAction: (decorators: DecoratorFn[]) => ActionFn;
}
