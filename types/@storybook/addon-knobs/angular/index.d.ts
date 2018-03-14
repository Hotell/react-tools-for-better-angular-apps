type WithKnob = (...args: any[]) => any;
interface WithKnobOptions {
  debounce: {
    wait: number;
    leading: boolean;
  };
  timestamp: boolean;
}

type KnobFn<T = any> = (label: string, defaultValue: T, groupId?: string) => any;

type KnobNumberRangeFn<T extends number> = (
  label: string,
  defaultValue: T,
  options?: NumberRangeOptions,
  groupId?: string
) => any;
type NumberRangeOptions = {
  range: boolean;
  min?: number;
  max?: number;
  step?: number;
};

type KnobArrayFn<T extends any[]> = (
  label: string,
  defaultValue: T,
  separator?: string,
  groupId?: string
) => any;

type KnobButtonFn = (label: string, handler: (...args: any[]) => any, groupId?: string) => any;

declare module '@storybook/addon-knobs/angular' {
  const withKnobs: WithKnob;
  const withKnobsOptions: (options?: Partial<WithKnobOptions>) => WithKnob;
  const text: KnobFn<string>;
  const number: KnobFn<number> | KnobNumberRangeFn;
  const boolean: KnobFn<boolean>;
  const object: KnobFn<object>;
  const array: KnobArrayFn;
  const select: KnobFn;
  const color: KnobFn;
  const date: KnobFn<Date>;
  const button: KnobButtonFn;
}
