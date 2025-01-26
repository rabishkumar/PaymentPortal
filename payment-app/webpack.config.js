const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto', // Or 'auto' for Webpack to figure out automatically
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002,
    hot: true,
    historyApiFallback: true, // For SPAs
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,  // Match .svg files
        type: 'asset/resource',  // Handle the SVG file as a resource
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: "PaymentApp",
      filename: "remoteEntry.js",
      exposes: {
        "./PaymentPage": "./src/PaymentPage",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,  // Eagerly load react for both host and remote apps
          requiredVersion: '^17.0.0', // specify the correct version if needed
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '^17.0.0',
        },
      },
    }),
  ],
  mode: 'development',
};
