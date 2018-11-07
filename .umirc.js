import { resolve } from 'path';

export default {
  alias: {
    'components': resolve(__dirname, 'src/components'),
    'layouts': resolve(__dirname, 'src/layouts'),
    'utils': resolve(__dirname, 'src/utils'),
    'antd-noform': resolve(__dirname, 'src/utils/noform'),
  },
  extraBabelPlugins: [
    ['wrapper', {}],
  ],
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: {
        hmr: true,
      },
      targets: {
        ie: 9,
      },
      dynamicImport: true,
      routes: {
        exclude: [/(.*)\/(assets|components|models|services)\/(.*)/],
      },
    }],
  ],
  hash: true,
  targets: {
    ie: 11,
  },
  ignoreMomentLocale: true,
  manifest: {
    name: '来艾云商后台管理系统',
    background_color: '#FFF',
    description: '来艾云商作为一款手机开店 APP，提出“云端供应链共享” 概念，人人都能一键开店，方便快捷省心，轻松开展网上零售业务。',
    display: 'standalone',
    start_url: '/index.html',
    icons: [
      {
        src: '/favicon.png',
        sizes: '48x48',
        type: 'image/png',
      },
    ],
  },
}
