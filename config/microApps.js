const apps = [
  {
    name: 'micro-app-a',    // 子应用名称
    entry:
      process.env.NODE_ENV === 'development'
        ? '//localhost:8001/micro-app-a'
        : '/micro-app-a',   // 子应用入口
    codePath: 'micro-app-a',    // 子应用工程目录名称，打包脚本会用到这参数
  },
];

module.exports = apps;