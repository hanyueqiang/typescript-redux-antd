import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import RenderRouter from './routes';
moment.locale('zh-cn');

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN} componentSize="middle">
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
