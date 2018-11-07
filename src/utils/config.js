export const version = '2.0.0';
const testUrl = 'http://jiayi-test.lai-ai.com';
const prodUrl = 'https://jiayi.lai-ai.com';

export const isProd = window.location.origin === 'https://lecturer.jiayixueyuan.com';

export const baseUrl = localStorage.getItem('url') || (isProd ? prodUrl : testUrl);

export const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};

export const formFieldLayout = {
  style: { width: '100%' },
};

export const dateFormat = 'YYYY-MM-DD HH:mm:ss';

export const monthFormat = 'YYYYMM';

export const initPagination = {
  current: 1,
  pageSize: 10,
};

export const defaultPagination = {
  current: 1,
  pageSize: 10,
};
