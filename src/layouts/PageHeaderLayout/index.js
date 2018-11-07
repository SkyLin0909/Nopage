import React from 'react';
// import { Link } from 'dva/router';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import styles from './index.less';

//  {...restProps} linkElement={Link}
export default ({ title, children, wrapperClassName }) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    {title && <PageHeader title={title} key="pageheader" />}
    {children ? <div className={styles.content}>{children}</div> : null}
  </div>
);
