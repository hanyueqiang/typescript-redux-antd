import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import NoPage from '@/pages/404'
import { RouteProps } from 'react-router';

export interface WrapperRouteProps extends RouteProps {
  /** authorization？ */
  auth?: boolean;
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ auth, ...props }) => {
  const WitchRoute = auth ? NoPage : Route;
  return <WitchRoute {...props} />;
};

export default WrapperRouteComponent;
