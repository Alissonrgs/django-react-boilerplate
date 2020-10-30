import React, { useState } from 'react'
import { Sidebar } from 'semantic-ui-react'
import AccordionMenu from './accordion-menu'

// components
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
        <AccordionMenu handleSidebarHide={handleSidebarHide} />
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