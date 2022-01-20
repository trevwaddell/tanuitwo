const modeConfig = (env) => {
  return require(`./webpack.${env}`)(env);
};

const presetsConfig = require("./loadPresets");

module.exports = { modeConfig, presetsConfig };
