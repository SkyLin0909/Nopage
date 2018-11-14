import React, { PureComponent } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import {
  message,
  Row,
  Col,
  Button,
} from 'antd';
import {
  Form,
  FormCore,
  FormItem,
  Input,
  InputNumber,
  Select,
  DatePicker,
  DialogForm,
} from 'antd-noform';
import { PageTable } from 'components';
import { dateFormat } from 'utils/config';

const { Option } = Select;
const { RangePicker } = DatePicker;
const initialValues = {
  id: '',
};

@connect()
class Bargain extends PureComponent {
  columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      align: 'center',
    },
  ];

  constructor() {
    super();
    this.form = new FormCore();
    this.state = {
      lecturerList: [],
    }
  }

  onCreate = (formValues = initialValues) => {
    this.form.setValues({
      ...formValues,
      applyTime: formValues.applyStartTime && [moment(formValues.applyStartTime), moment(formValues.applyEndTime)],
      curriculumTime: formValues.curriculumTime && moment(formValues.curriculumTime),
    });

    const { id } = formValues;
    const { lecturerList } = this.state;

    const onOk = (values, hide) => {
      this.form.validate(errors => {
        if (!errors) {
          message.success(`设置成功`);
          hide();
        }
      });
    };

    const getPosition = () => {
      this.form.setValues({ longitude: 123, latitude: 13 });
    };

    const clearPosition = () => {
      this.form.setValues({ longitude: '', latitude: '' });
    };

    DialogForm.show({
      title: `${id ? '编辑' : '新建'}活动`,
      width: 1000,
      onOk,
      content: (
        <Form core={this.form}>
          <FormItem name="name" label="课程名称">
            <Input placeholder="请输入" />
          </FormItem>
          <FormItem name="lecturerId" label="讲师姓名">
            <Select>
              {lecturerList.map(item => (
                <Option key={item.id} value={item.id}>
                  {item.lecturerName}
                </Option>
              ))}
            </Select>
          </FormItem>
          <FormItem name="applyTime" label="报名时间">
            <RangePicker showTime format={dateFormat} />
          </FormItem>
          <FormItem name="curriculumTime" label="开课时间">
            <DatePicker showTime format={dateFormat} />
          </FormItem>
          <FormItem name="site" label="开课地点" onBlur={clearPosition}>
            <Input placeholder="请输入开课地点" />
          </FormItem>
          <FormItem name="address" label="详细地址" onBlur={clearPosition}>
            <Input placeholder="请输入详细地址" />
          </FormItem>
          <Row style={{ marginTop: '12px', marginBottom: '12px' }}>
            <Col span={8}>
              <FormItem name="longitude" label="经度" status="disabled">
                <Input placeholder="经度" />
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name="latitude" label="纬度" status="disabled">
                <Input placeholder="纬度" />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                render={(values) => {
                  const { site, address } = values;
                  return <Button type="primary" onClick={getPosition} disabled={!(site && address)}>获取经纬度</Button>
                }}
              />
            </Col>
          </Row>
          <FormItem name="applyPeople" label="限制人数">
            <InputNumber placeholder="人数" min={1} precision={0} />
          </FormItem>
          <FormItem name="shareDescription" label="分享描述">
            <Input placeholder="请输入" />
          </FormItem>
        </Form>
      ),
    });
  };

  render() {
    const { lecturerList } = this.state;
    return (
      <PageTable
        title="砍价管理"
        createText="发布课程"
        rowKey="bargainId"
        columns={this.columns}
        onCreate={() => this.onCreate(initialValues)}
        form={
          <>
            <Row gutter={{ md: '8', lg: '24', xl: '48' }}>
              <Col md={8} sm={24}>
                <FormItem name="rangeTime" label="报名时间">
                  <RangePicker showTime format={dateFormat} />
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem name="name" label="课程名称">
                  <Input placeholder="请输入" />
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem name="lecturerId" label="讲师姓名">
                  <Select>
                    {lecturerList.map(item => (
                      <Option key={item.id} value={item.id}>
                        {item.lecturerName}
                      </Option>
                    ))}
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <FormItem name="courseTime" label="开课时间">
              <RangePicker showTime format={dateFormat} />
            </FormItem>
          </>
        }
      />
    );
  }
}

export default Bargain;
