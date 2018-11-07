import React from 'react';
import { Icon } from 'antd';
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';

export default () => (
  <GlobalFooter
    copyright={
      <>
        Copyright <Icon type="copyright" /> 2018 广东来艾健康科技有限公司
      </>
    }
  />
);
