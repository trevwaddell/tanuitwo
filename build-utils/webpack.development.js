module.exports = () => ({
  devServer: {
    open: true,
    historyApiFallback: true,
    client: {
      overlay: true,
    },
  },
});
