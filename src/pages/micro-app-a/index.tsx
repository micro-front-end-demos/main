import React from 'react';
import { MicroApp } from 'umi';

export default () => {
  // name 是 config/microApps.js 里配置的
  return <MicroApp name="micro-app-a" />;
};
