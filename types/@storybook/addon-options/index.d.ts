interface OptionsConfig {
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: string;
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: string;
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: boolean;
  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showStoriesPanel: boolean;
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showAddonPanel: boolean;
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: boolean;
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: boolean;
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: boolean;
  /**
   * regex for finding the hierarchy separator
   * @example:
   *   null - turn off hierarchy
   *   /\// - split by `/`
   *   /\./ - split by `.`
   *   /\/|\./ - split by `/` or `.`
   * @type {Regex}
   */
  hierarchySeparator: null | RegExp;
  /**
   * regex for finding the hierarchy root separator
   * @example:
   *   null - turn off mulitple hierarchy roots
   *   /\|/ - split by `|`
   * @type {Regex}
   */
  hierarchyRootSeparator: null | RegExp;
  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: boolean;
  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedAddonPanel: string; // The order of addons in the "Addon panel" is the same as you import them in 'addons.js'. The first panel will be opened by default as you run Storybook
}
declare module '@storybook/addon-options' {
  const setOptions: (config: Partial<OptionsConfig>) => any;
}
