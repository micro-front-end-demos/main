import React from 'react';
import styles from './index.less';
import { history } from 'umi';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button
        onClick={() => {
          history.push('/micro-app-a');
        }}
      >
        push micro-app-a
      </button>
    </div>
  );
};
