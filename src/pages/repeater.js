import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { Form, Select, FormItem, TableRepeater, FormCore, InlineRepeater, InputNumber } from 'antd-noform';
import { Page, ProdcutPicker } from 'components';

const { Option } = Select;

const initialValues = {
  marketingActivitySkuList: [],
  list: [],
};

const commonProps = {
  locale: 'zh',
  maxLength: 5,
};
const inlineRepeaterProps = {
  ...commonProps,
  formConfig: {
    validateConfig: {
      activityThresholdPrice: { required: true, message: '填写优惠门槛'},
      giveSkuList: { required: true, message: '填写赠送商品'},
    },
    autoValidate: true,
  },
  dialogConfig: {
    layout: {
      label: 4,
      control: 20,
    },
    width: 800,
  },
  itemAlign: 'center',
  asyncHandler: {},
};
const tableRepeaterProps = {
  ...commonProps,
  formConfig: {
    validateConfig: {
      commodityId: { required: true, message: '填写选择商品'},
      specId: { required: true, message: '填写选择商品规格'},
    },
    autoValidate: true,
  },
  dialogConfig: {
    width: 1000,
  },
  asyncHandler: {},
};

export default class extends PureComponent {
  constructor() {
    super();
    this.form = new FormCore({
      validateConfig: {
        activityAbbreviation: [{ required: true, message: '请输入活动名称，且不大于15个字', max: 15 }],
        activityName: [{ required: true, message: '请输入活动名称，且不大于15个字', max: 15 }],
        timeRange: [{ required: true, message: '请输入活动日期' }],
      },
      values: initialValues,
    });
  };

  render() {
    const {
      location: {
        query: { id, operator },
      },
    } = this.props;
    const preview = operator === 'preview';

    return (
      <Page title={`${id ? (preview ? '查看' : '编辑') : '新建'}满赠活动`}>
        <Form core={this.form}>
          <Card title="新增满赠活动">
            <FormItem label="优惠设置" name="marketingActivityRuleList">
              <InlineRepeater
                {...inlineRepeaterProps}
              >
                <FormItem
                  label="层级"
                  name="order"
                  status='preview'
                  renderCell={(_, { index: order }) => <span>{order + 1}</span>}
                />
                <FormItem label="优惠门槛" name="activityThresholdPrice" prefix='满' suffix='元' defaultMinWidth={false}>
                  <InputNumber width={{ width: 50 }} min={1} precision={2} />
                </FormItem>
                <FormItem name='giveSkuList' label='赠送商品'>
                  <TableRepeater {...tableRepeaterProps}>
                    <FormItem label="选择商品" name="commodityId" size='small'>
                      <ProdcutPicker />
                    </FormItem>
                    <FormItem
                      label="选择规格"
                      name="specId"
                      size='small'
                      render={(values, core) => {
                        const data = JSON.parse(values.commodityId) || {};
                        const { specList = []} = data;
                        const onSelect = (value) => {core.setValue('specId', value)};

                        return (
                          <Select
                            value={values.specId}
                            onSelect={(a) => {onSelect(a)}}
                            status={core.status.specId}
                          >
                            {specList.map(i => (
                              <Option key={i.specId} value={i.specId}>
                                {`${i.specName}`}
                              </Option>
                            ))}
                          </Select>
                        )}
                      }
                    />
                  </TableRepeater>
                </FormItem>
              </InlineRepeater>
            </FormItem>
          </Card>
        </Form>
      </Page>
    );
  }
}

