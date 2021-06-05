import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Index } from './pages/index';
import reportWebVitals from './reportWebVitals';

import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-ynh1y5fm.jp.auth0.com"
    clientId="iDFcpMNyTDjDmCY8V0QkeJzdjTdj8Vj4"
    redirectUri={window.location.origin}
  >
    <Index />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
