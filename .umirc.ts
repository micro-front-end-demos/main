import { defineConfig } from 'umi';

const apps = require('./config/microApps');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'browser',
  },
  qiankun: {
    master: {
      apps,
    },
  },
});
