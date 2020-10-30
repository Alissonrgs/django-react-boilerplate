// local imports
import { IUserState, UserTypes } from "./types"

export const fetchCurrentUser = () => {
  return {
    type: UserTypes.FETCH_CURRENT_USER
  }
}

export const fetchCurrentUserSuccess = (current_user:IUserState) => {
  return {
    type: UserTypes.FETCH_CURRENT_USER_SUCCESS,
    payload: current_user
  }
}