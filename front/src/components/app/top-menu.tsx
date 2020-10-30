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
      <Menu.Menu position='right'>
        <Dropdown
          button
          direction='left'
          floating
          item
          pointing='top right'
          id='i-btnNotification'
          trigger={
            <>
              <Icon name='question circle outline' />
            </>
          }
        />
        <Dropdown
          button
          direction='left'
          floating
          item
          pointing='top right'
          id='i-btnNotification'
          trigger={
            <>
              <Icon name='bell' />
            </>
          }>
          <Dropdown.Menu className='menu-dropdown'>
            <Dropdown.Header>
              <Header>
                <Icon name='bell' />
                <Header.Content>
                </Header.Content>
              </Header>
            </Dropdown.Header>

            <Divider />

            <Divider />
            <Dropdown.Header className='menu-dropdown-header'>
              <Button.Group size='small' widths='two'>
                <Button
                  as={ Link }
                  basic
                  className='menu-dropdown-button'
                  content={'Ver Todas'}
                  icon='eye'
                  to='/notifications' />
                <Button
                  basic
                  className='menu-dropdown-button'
                  content={'Marcar como lido'}
                  icon='eraser'
                />
              </Button.Group>
            </Dropdown.Header>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown
          button
          direction='left'
          floating
          item
          pointing='top right'
          trigger={
              <Icon name='user' />
          }>
            <Dropdown.Menu>
              <Dropdown.Header>
                <Header as={Link} to='/profile'>
                  <Header.Content>
                    <Icon name='user' />
                  </Header.Content>
                </Header>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item
                as='a'
                icon='key'
                text={'Alterar Senha'} />
              <Dropdown.Item
                as='a'
                icon='lock'
                text={'Segurança'} />
              <Dropdown.Item
                as='a'
                icon='sign-out'
                text={'Logout'} />
            </Dropdown.Menu>
          </Dropdown>
      </Menu.Menu>
    </Menu>
  )
}

export default TopMenu