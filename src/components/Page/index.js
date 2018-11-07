import React from 'react';
import { Card } from 'antd';
import PageHeaderLayout from 'layouts/PageHeaderLayout';

export default ({ title, children, cardProps = {} }) => (
  <PageHeaderLayout title={title}>
    <Card bordered={false} {...cardProps}>
      <div className="tableList">{children}</div>
    </Card>
  </PageHeaderLayout>
);
