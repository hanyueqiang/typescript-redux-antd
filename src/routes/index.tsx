import React from "react";
import NoMatch from '@/pages/404'
import { Switch, Route } from "react-router-dom";
import AntdDemo from '@/pages/antdDemo'
import CssDemo from '@/pages/cssDemo'
import ImgDemo from '@/pages/imgDemo'

export default function Index() {

  return (
    <Switch>
      <Route exact path="/" component={AntdDemo} />
      <Route path="/css" component={CssDemo} />
      <Route path="/img" component={ImgDemo} />
      <NoMatch />
    </Switch>
  )
}
