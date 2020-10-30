// react imports
import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter,
  Route
} from 'react-router-dom'

// third party imports
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

// local imports
import store from "./store"
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