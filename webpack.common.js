const webpack = require('webpack');

const plugins = [
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify('5'),
    EXPERIMENTAL_FEATURE: JSON.stringify(false),
  }),
];

const loaders = [
  {
    test: /\.(js|ts)$/,
    loader: 'string-replace-loader',
    options: {
      multiple: [
        {
          search: /\$RESX{{\w+?}:{\w+?}:{([\w ]*?)}}/gi,
          replace: (match, p1) => p1,
        },
      ],
    },
  },
];

const customConfig = {
  devServer: {
    client: {
      webSocketURL: 'wss://0.0.0.0:4200/ws',
    },
    hot: true,
    host: '0.0.0.0',
    port: 4200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
};

module.exports = {
  customConfig,
  loaders,
  plugins,
};
