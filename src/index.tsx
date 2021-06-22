import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import RenderRouter from './routes';
import AuthComponent from './auth'

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN} componentSize="middle">
      <AuthComponent>
        <RenderRouter />
      </AuthComponent>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);
