const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "PaymentApp",
      filename: "remoteEntry.js",
      exposes: {
        "./OrdersPage": "./src/OrdersPage",
      },
    }),
  ],
};
