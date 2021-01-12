const child_process = require('child_process');
const process = require('process');

const pwd = process.cwd();

// 先打包主应用
child_process.execSync('yarn build', { stdio: 'inherit' });

const apps = require('../config/microApps');

for (let i = 0; i < apps.length; i += 1) {
  const app = apps[i];
  // 子应用项目目录
  const codePath = app.codePath || app.name;
  // 打包子应用，然后复制到主应用打包目录下
  child_process.execSync(
    `cd ../${codePath} && yarn build && cp -rf dist ${pwd}/dist/${app.entry}`,
    {
      stdio: 'inherit',
    },
  );
}
