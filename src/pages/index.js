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

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        lecturerList: [
          {
            isClose: 0,
            listId: 13,
            gmtModified: '2018-08-23 16:27:20',
            lecturerIntroduction: '决赛晋级选手',
            lecturerName: '决赛晋级选手',
            creatorId: 0,
            modifierId: 38,
            id: 16,
            headPortrait: 'http://jiayicollege.oss-cn-shenzhen.aliyuncs.com/upload/20180823/8c71c92dcec242c1a89cce64b4a2602b.jpg',
            gmtCreate: '2018-08-22 17:30:25',
          },
          {
            isClose: 0,
            listId: 11,
            gmtModified: '2018-11-05 11:45:50',
            lecturerIntroduction: '曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。曾获多项国家级奖项，资深国学经典主讲人。2018年荣获“懒人听书十大最受欢迎节目主播”、深圳读书月组委会颁发的“最佳数字创意奖”等奖项。',
            lecturerName: '老墨家族',
            creatorId: 0,
            modifierId: 50,
            id: 14,
            headPortrait: 'http://120.76.46.168:5050/2018/07/12/2018071209054204301071.jpg',
            gmtCreate: '2018-08-10 19:34:11',
          },
          {
            isClose: 0,
            listId: 1,
            gmtModified: '2018-08-27 15:25:43',
            lecturerIntroduction: '深圳电台飞扬971的创台主持人之一\n深圳著名原创音乐品牌“鹏城歌飞扬”的创始人\n“金笔奖”、“金号奖”等国家级奖项获得者',
            lecturerName: '夏冰',
            creatorId: 0,
            modifierId: 50,
            id: 1,
            headPortrait: 'http://120.76.46.168:5050/2017/12/28/2017122806314452906872.jpg',
            gmtCreate: '2018-08-10 19:34:11',
          },
          {
            isClose: 0,
            listId: 4,
            gmtModified: '2018-08-27 15:24:31',
            lecturerIntroduction: '专业配音员、新闻频道主持人、中国演讲与口才教育研究院院长、国内著名专注语言表达研究导师、清华北大研究生院客座讲师、北大汇丰商学院客座讲师',
            lecturerName: '孙赫廷',
            creatorId: 0,
            modifierId: 50,
            id: 4,
            headPortrait: 'http://120.76.46.168:5050/2017/12/28/2017122806312088802004.jpg',
            gmtCreate: '2018-08-10 19:34:11',
          },
          {
            isClose: 0,
            listId: 2,
            gmtModified: '2018-08-23 11:12:45',
            lecturerIntroduction: '教育学硕士 、国家二级心理咨询师 、中国卫生心理协会会员 、情绪能量管理师、福建省心理咨询师协会认证咨询师 \n',
            lecturerName: '莫以曼',
            creatorId: 0,
            modifierId: 38,
            id: 2,
            headPortrait: 'http://120.76.46.168:5050/2017/12/28/2017122806313438508724.jpg',
            gmtCreate: '2018-08-10 19:34:11',
          },
          {
            isClose: 0,
            listId: 3,
            gmtModified: '2018-08-10 19:34:11',
            lecturerIntroduction: '知名创业公司CEO',
            lecturerName: 'SAMUEL',
            creatorId: 0,
            modifierId: 0,
            id: 3,
            headPortrait: 'http://120.76.46.168:5050/2017/12/28/2017122806312777406962.jpg',
            gmtCreate: '2018-08-10 19:34:11',
          },
          {
            isClose: 0,
            listId: 5,
            gmtModified: '2018-08-10 19:34:11',
            lecturerIntroduction: '现任广州中医药大学附属中山中医院中药药理实验室主任、科教科科长、教授、主任中药师、博士生导师。',
            lecturerName: '梅全喜',
            creatorId: 0,
            modifierId: 0,
            id: 5,
            headPortrait: 'http://120.76.46.168:5050/2017/12/28/2017122806310724805985.jpg',
            gmtCreate: '2018-08-10 19:34:11',
          },
          {
            isClose: 0,
            listId: 6,
            gmtModified: '2018-08-10 19:34:11',
            lecturerIntroduction: '就是很神秘！！！',
            lecturerName: '魏东',
            creatorId: 0,
            modifierId: 0,
            id: 6,
            headPortrait: 'http://120.76.46.168:5050/2017/12/30/2017123010353450002184.jpg',
            gmtCreate: '2018-08-10 19:34:11',
          },
          {
            isClose: 0,
            listId: 7,
            gmtModified: '2018-08-10 19:34:11',
            lecturerIntroduction: '首个艾艾贴经销商定制化微营销实战36计，由甲乙学院&微营销6大巨星导师联合打造',
            lecturerName: '六大导师',
            creatorId: 0,
            modifierId: 0,
            id: 10,
            headPortrait: 'http://120.76.46.168:5050/2018/05/09/2018050903025663203606.jpg',
            gmtCreate: '2018-08-10 19:34:11',
          },
          {
            isClose: 0,
            listId: 8,
            gmtModified: '2018-08-10 19:34:11',
            lecturerIntroduction: '参赛选手',
            lecturerName: '参赛选手',
            creatorId: 0,
            modifierId: 0,
            id: 11,
            headPortrait: 'http://120.76.46.168:5050/2018/05/15/2018051507190549007837.jpg',
            gmtCreate: '2018-08-10 19:34:11',
          },
          {
            isClose: 0,
            listId: 9,
            gmtModified: '2018-08-10 19:34:11',
            lecturerIntroduction: '来艾云商',
            lecturerName: '来艾云商',
            creatorId: 0,
            modifierId: 0,
            id: 12,
            headPortrait: 'http://120.76.46.168:5050/2018/05/23/2018052301421731801654.png',
            gmtCreate: '2018-08-10 19:34:11',
          },
          {
            isClose: 0,
            listId: 10,
            gmtModified: '2018-08-10 19:34:11',
            lecturerIntroduction: '甲乙小课堂',
            lecturerName: '甲乙小课堂',
            creatorId: 0,
            modifierId: 0,
            id: 13,
            headPortrait: 'http://120.76.46.168:5050/2018/06/16/201806160535562480699.jpg',
            gmtCreate: '2018-08-10 19:34:11',
          },
          {
            isClose: 0,
            listId: 12,
            gmtModified: '2018-08-10 19:34:11',
            lecturerIntroduction: '复赛晋级选手',
            lecturerName: '复赛晋级选手',
            creatorId: 0,
            modifierId: 0,
            id: 15,
            headPortrait: 'http://120.76.46.168:5050/2018/07/31/2018073107094077209572.png',
            gmtCreate: '2018-08-10 19:34:11',
          },
        ],
      })
    }, 3000)
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
      console.log(1);
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
