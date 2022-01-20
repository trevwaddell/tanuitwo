const { merge } = require("webpack-merge");

const applyPresets = (env = { presets: [] }) => {
  console.log(env, "IN APPLY PRESETS");

  const presets = env.presets || [];

  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map((preset) =>
    require(`./presets/webpack.${preset}`)(env)
  );

  return merge({}, ...mergedConfigs);
};

module.exports = applyPresets;
