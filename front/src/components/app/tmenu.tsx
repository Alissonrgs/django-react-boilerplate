// react imports
import React, { useState } from 'react'

// third party imports
import { Sidebar } from 'semantic-ui-react'

// components
import SideMenu from './side-menu'
import TopMenu from './top-menu'


const TMenu: React.FC = ({children}) => {
    const [sideBarVisible, setSideBarVisible] = useState(false)

    const handleSidebarHide = () => {
        setSideBarVisible(false)
    }

    const handleSidebarVisibleChange = () => {
        setSideBarVisible(!sideBarVisible)
    }

	return (
    <Sidebar.Pushable>
      <Sidebar
        animation='overlay'
        duration={ 250 }
        icon='labeled'
        width='wide'
        onHide={ handleSidebarHide }
        visible={sideBarVisible}>
        <SideMenu handleSidebarHide={handleSidebarHide} />
      </Sidebar>
      <Sidebar.Pusher dimmed={sideBarVisible}>
        <TopMenu
          handleSidebarVisibleChange={handleSidebarVisibleChange} />
        { children }
      </Sidebar.Pusher>
    </Sidebar.Pushable>
	)
}

export default TMenu;