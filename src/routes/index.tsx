import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ProLayout from '@/layouts'
import NoFoundPage from '@/pages/404'
import routeConfigs from './loadPageConfig'

export default function Index() {
  const noMenuLayouts = routeConfigs.filter(item => !item.menuLayout)
  const menuLayouts = routeConfigs.filter(item => item.menuLayout)
  console.log(menuLayouts)
  return (
    <BrowserRouter>
      <Route render={() => (
        <Switch>
          <Route exact={true} path="/" render={() => <Redirect to='/home' />} />
          {noMenuLayouts.map((route: any) => <RouteWithRouters key={route.path} {...route} />)}
          <ProLayout >
            <Switch>
              {menuLayouts.map((route: any) => <RouteWithRouters key={route.path} {...route} />)}
              <Route render={() => <NoFoundPage />} />
            </Switch>
          </ProLayout>
        </Switch>
        )} />
    </BrowserRouter>
  )
}

interface RouteType {
  path: string;
  component: any;
  menuLayout: boolean;
}

const RouteWithRouters = (route: RouteType) => {
  return (
    <Route
      path={route.path}
      render={props => {
        return (
          <React.Suspense fallback={<div>加载中...</div>}>
            <route.component {...props} />
          </React.Suspense>
        );
      }}
    />
  );
};
