// third party imports
import { combineReducers } from 'redux'

// accounts
import current_user from './current_user/reducer'

export default combineReducers({
  current_user,
})