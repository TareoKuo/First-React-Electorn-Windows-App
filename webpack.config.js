module.exports = {
  entry: "./main/main.ts",
  resolve: {
    fallback: {
      "assert": require.resolve('assert/'),
      "path": require.resolve('path-browserify'),
      "os": require.resolve("os-browserify/browser"),
      "util": require.resolve('util/'),
      "fs": false,  // 使用此配置表示不提供 fs 模块，你也可以尝试 require.resolve('fs') 作为替代
    }
  },
  // "externals": {
  //   "fs": 'require("fs")',
  // },
};
