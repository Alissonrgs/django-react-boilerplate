import React from 'react'
import { Redirect } from "react-router"
import { Switch } from 'react-router-dom'
import _ from 'lodash'

// components
import TMenu from './components/app/tmenu'
import RouteWithSubRoutes from './components/common/route-with-sub-routes'

// statics
import './static/css/app.css'

import Route from './routes/Route'

const App:React.FC = () => {
  return (
    <>
      <TMenu>
        <Switch>
          {_.map(Route, (route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
          <Redirect from='*' to='/' />
        </Switch>
      </TMenu>
    </>
  )
}

export default App