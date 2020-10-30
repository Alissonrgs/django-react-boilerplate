// react imports
import React from 'react'
import { Link } from 'react-router-dom'

// third party imports
import {
  Accordion,
  Menu,
  Item,
  Icon
} from 'semantic-ui-react'

import { map } from 'lodash'


import routes from '../../routes/Route'

const SideMenu = (props) => {
  return (
    <Accordion as={Menu} inverted vertical>
      {
        map(routes, (route, index) => {
          if (!route.menu)
            return false

          return (
            <Menu.Item
              as={ Link }
              key={ index }
              onClick={ props.handleSidebarHide }
              to={ route.path }>
              <Item.Content>
                <Item.Header>
                  <Icon name={ route.icon } />
                  { route.name }
                </Item.Header>
              </Item.Content>
            </Menu.Item>
          )
        })
      }
    </Accordion>
  )
}
export default SideMenu