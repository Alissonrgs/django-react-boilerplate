import React, { useEffect } from 'react'
import { Redirect } from "react-router"
import { Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

// redux
import { IState } from './store/modules/types'
import { IUserState } from './store/modules/current_user/types'
import { fetchCurrentUser } from './store/modules/current_user/actions'

// components
import RouteWithSubRoutes from './components/common/route-with-sub-routes'

// statics
import './static/css/app.css'

import Route from './routes/Route'

const App:React.FC = () => {
  const dispatch = useDispatch()
  const current_user = useSelector<IState, IUserState>(store => store.current_user)

  console.log(current_user)

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [])

  return (
    <>
      <Switch>
        {_.map(Route, (route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
        <Redirect from='*' to='/' />
      </Switch>
    </>
  )
}

export default App