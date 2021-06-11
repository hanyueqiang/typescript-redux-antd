import React from "react";
import ReactDOM from "react-dom";
import CssDemo from '@/pages/cssDemo';
import LessDemo from '@/pages/lessDemo';
import './index.less'
import AntdDemo from '@/pages/antdDemo';

const App = () => (
  <div>
    <h1>React</h1>
    <CssDemo />
    <LessDemo />
    <AntdDemo />
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
