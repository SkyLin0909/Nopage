import React from 'react';
import GlobalFooter from 'components/GlobalFooter';
import styles from './index.less';
import logo from '../../assets/logo.png';

export default ({ children }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.header}>
          <img alt="logo" className={styles.logo} src={logo} />
          <span className={styles.title}>讲师管理系统</span>
        </div>
        <div className={styles.desc}>你值得拥有更好的体验</div>
      </div>
      {children}
    </div>
    <GlobalFooter />
  </div>
);
