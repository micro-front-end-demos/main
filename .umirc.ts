import { defineConfig } from 'umi';

const apps = require('./config/microApps');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    { path: '/micro-app-a', microApp: 'micro-app-a' },  // 子应用路由
  ],
  history: {
    type: 'browser',
  },
  qiankun: {
    master: {
      apps,
    },
  },
});
