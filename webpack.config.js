const nodeExternals = require('webpack-node-externals');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');

module.exports = [
  {
    entry: './src/server.js',
    output: {
      path: './build',
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/',
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
    },
    externals: nodeExternals(),
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
        },
        {
          test: /\.scss$/,
          loaders: [
            'isomorphic-style-loader',
            'css-loader?modules&camelCase&localIdentName=[name]_[local]_[hash:base64:3]',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    sassLoader: {
      includePaths: [path.resolve(__dirname, './src')],
    },
  },
  {
    entry: './src/client.js',
    output: {
      path: './build/assets',
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
        },
        {
          test: /\.scss$/,
          loaders: [
            'isomorphic-style-loader',
            'css-loader?modules&camelCase&localIdentName=[name]_[local]_[hash:base64:3]',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new FaviconsWebpackPlugin({
        logo: path.resolve(__dirname, './favicon.png'),
        prefix: '/icons',
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      }),
    ],
    sassLoader: {
      includePaths: [path.resolve(__dirname, './src')],
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  },
];
