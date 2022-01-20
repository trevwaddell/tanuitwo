const { merge } = require("webpack-merge");
const HtmlWebPlugin = require("html-webpack-plugin");

const { modeConfig, presetsConfig } = require("./build-utils");

// module.exports = () =>
module.exports = (env, args) => {
  console.log("these be the args homie", args);
  const mode = args.mode || "production";
  const presets = args.env.presets || [];

  return merge(
    {
      mode,
      output: { filename: "bundle.js" },
      module: { rules: [{ test: /\.js$/, use: { loader: "babel-loader" } }] },
      plugins: [new HtmlWebPlugin({ template: "./src/index.html" })],
    },
    modeConfig(mode),
    presetsConfig({ mode, presets })
  );
};
