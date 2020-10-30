import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from "./store";

import {
  HashRouter,
  Route
} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import './index.css'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <Route path="/" component={ App } />
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)