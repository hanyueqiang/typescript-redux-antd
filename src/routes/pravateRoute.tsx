import React, { FC } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';
import { RouteProps, useLocation } from 'react-router';
import { useAppState } from '@/redux/store';

const PrivateRoute: FC<RouteProps> = props => {
  const { logged } = useAppState(state => state.user);
  const history = useHistory();
  const location = useLocation();

  return logged ? (
    <Route {...props} />
  ) : (
    <Result
      status="403"
      title="403"
      subTitle="no auth"
      extra={
        <Button
          type="primary"
          onClick={() => history.push(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })}
        >
          返回登录
        </Button>
      }
    />
  );
};

export default PrivateRoute;