const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
//   name: "server",
  entry: './server/index.ts',
//   target:'node',
//   mode: "production",
  output: {
    path: path.resolve(__dirname,'./build'),
    filename: "index.js",
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        // use: ["style-loader", 'ts-loader', "css-loader"],
        options: {
          configFile: "tsconfig.server.json",
        },
      },
    ],
  },
  target: "node",
  node: {
    __dirname: false,
  },
//   plugins: [
//     new CopyPlugin({
//       patterns: [{ context: "server", from: "views", to: "views" }],
//     }),
//   ],
};
