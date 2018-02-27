const path = require('path');

module.exports = (baseConfig) => {
  const preLoader = {
    test: [/\.stories\.tsx?$/, /index\.ts$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  };

  // @FIXME doesn't compile !
  // baseConfig.module.rules.push(preLoader);

  return baseConfig;
};
