import React from 'react'
import ReactDOM from 'react-dom'

import {
  HashRouter,
  Route
} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/" component={ App } />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)