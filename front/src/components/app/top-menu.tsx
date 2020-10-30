// react imports
import React from 'react'
import { Link } from 'react-router-dom'

// third party imports
import {
  Button,
  Divider,
  Dropdown,
  Header,
  Icon,
  Menu,
} from 'semantic-ui-react'

// statics
import {Text} from './styles'


const TopMenu: React.FC<any> = (props) => {
  return (
    <Menu attached='top' inverted borderless className='top-menu'>
      <Menu.Item id='i-btnMenu' onClick={props.handleSidebarVisibleChange}>
        <Icon name='sidebar' />
      </Menu.Item>
      <Menu.Item as={ Link } to='/'>
        <Text>
          Your project
        </Text>
      </Menu.Item>
    </Menu>
  )
}

export default TopMenu