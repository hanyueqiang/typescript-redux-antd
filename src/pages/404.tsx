import React from 'react';
import { Button, Result } from 'antd';
import { useHistory } from 'react-router-dom';

const NotFoundPage: React.FC<{}> = () => {
  const history = useHistory();
  return (
    <Result
      status="404"
      title="404"
      subTitle={"no found"}
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
            返回首页
        </Button>
      }
    ></Result>
  );
};

export default NotFoundPage;