const path = require('path');

module.exports = (baseConfig) => {
  const storysourceLoader = {
    test: [/\.stories\.tsx?$/, /index\.ts$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  };
  baseConfig.module.rules.push(storysourceLoader);

  return baseConfig;
};
