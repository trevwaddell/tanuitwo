module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "react-native-web",
      {
        commonjs: true,
      },
    ],
    [
      "module-resolver",
      {
        alias: {
          "^react-native$": "react-native-web",
        },
      },
    ],
  ],
};
