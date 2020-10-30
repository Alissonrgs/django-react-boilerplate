// third party imports
import { Reducer } from 'redux'
import produce from 'immer'

// local imports
import { IUserState, UserTypes } from './types'

const STATE_DEFAULT:IUserState = null

const current_user:Reducer<IUserState> = (state = STATE_DEFAULT, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case UserTypes.FETCH_CURRENT_USER_SUCCESS:
        return action.payload
      default:
        return draft
    }
  })
}

export default current_user