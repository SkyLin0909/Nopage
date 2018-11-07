import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Redirect from 'umi/redirect';
import classNames from 'classnames';
import { enquireScreen } from 'enquire-js';
import { ContainerQuery } from 'react-container-query';
import { Layout, Modal, Form, Input, message } from 'antd';
import { formItemLayout } from 'utils/config';
import GlobalHeader from 'components/GlobalHeader';
import GlobalFooter from 'components/GlobalFooter';
import SliderMenu from 'components/SliderMenu';
import logo from '../../assets/logo.png';

const { Content, Header, Footer } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

const ChangePasswordForm = connect()(
  Form.create()(props => {
    const { dispatch, form, modalVisible, onModalVisible } = props;
    const { getFieldDecorator, validateFields, resetFields } = form;

    const handleOk = () => {
      validateFields((err, fields) => {
        if (err) return;
        dispatch({
          type: 'global/changePassword',
          payload: fields,
          callback: () => {
            message.success('修改成功');
            onModalVisible();
            resetFields();
          },
        });
      });
    };

    const handleCancel = () => {
      onModalVisible(false);
      resetFields();
    };

    return (
      <Modal title="修改密码" visible={modalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form.Item {...formItemLayout} label="旧密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入旧密码' }],
          })(<Input type="password" placeholder="请输入旧密码" />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="新密码">
          {getFieldDecorator('newPassword', {
            rules: [{ required: true, message: '请输入新密码' }],
          })(<Input type="password" placeholder="请输入新密码" />)}
        </Form.Item>
      </Modal>
    );
  })
);

@connect(({ global }) => global)
class BasicLayout extends PureComponent {
  state = {
    isMobile,
    modalVisible: false,
  };

  componentDidMount() {
    enquireScreen(mobile => {
      this.setState({
        isMobile: mobile,
      });
    });
    // TODO: 开发使用
    // this.props.dispatch({
    //   type: 'index/index',
    //   payload: {
    //     username: 'superAdmin',
    //     password: '123456',
    //   },
    // });
  }

  handleMenuCollapse = collapsed => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  };

  handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      this.props.dispatch({
        type: 'global/logout',
      });
    } else if (key === 'changePassword') {
      this.handleModalVisible();
    }
  };

  handleModalVisible = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  render() {
    const {
      adminInfo: { realName: name },
      collapsed,
      location,
      menu,
      login,
    } = this.props;
    const currentUser = {
      name,
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    };

    const layout = (
      <Layout>
        <SliderMenu
          {...this.props}
          logo={logo}
          menuData={menu}
          collapsed={collapsed}
          location={location}
          isMobile={this.state.isMobile}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader
              logo={logo}
              currentUser={currentUser}
              collapsed={collapsed}
              isMobile={this.state.isMobile}
              onCollapse={this.handleMenuCollapse}
              onMenuClick={this.handleMenuClick}
            />
          </Header>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            {this.props.children}
          </Content>
          <Footer style={{ padding: 0 }}>
            <GlobalFooter />
          </Footer>
          <ChangePasswordForm
            modalVisible={this.state.modalVisible}
            onModalVisible={this.handleModalVisible}
          />
        </Layout>
      </Layout>
    );

    return login ? (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{layout}</div>}
      </ContainerQuery>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default BasicLayout;
