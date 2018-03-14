type LinkParams = string | ((...args: any[]) => string);
declare module '@storybook/addon-links' {
  function linkTo(kind: LinkParams, story?: LinkParams): (...args: any[]) => any;
  function hrefTo(kind: string, story?: string): Promise<string>;
}
