// react imports
import React from 'react'
import { useSelector } from 'react-redux'

// static imports
import logo from '../../static/images/logo.svg'
import './style.css'

// project imports
import { IState } from '../../store/modules/types'
import { IUserState } from '../../store/modules/current_user/types'

function App() {
  const current_user = useSelector<IState, IUserState>(store => store.current_user)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi, {current_user?.username}. Welcome
        </a>
      </header>
    </div>
  )
}

export default App