const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  publicPath: './',
  outputDir: 'webpage',
  // 修改 src 为 examples
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 压缩处理
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
          },
          sourceMap: false,
          parallel: true, // 使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      );
    }
  }
};
