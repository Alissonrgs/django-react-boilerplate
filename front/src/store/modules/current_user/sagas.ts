import { AxiosResponse } from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { api } from '../../../services/api'
import { fetchCurrentUser, fetchCurrentUserSuccess } from './actions'
import { IUserState, UserTypes } from './types'

type fetchCurrentUserType = ReturnType<typeof fetchCurrentUser>

function* fetchCurrentUserSaga({ type }: fetchCurrentUserType) {
  try {
    const response:AxiosResponse<IUserState> = yield call(api.get, 'current_user')

    if (response.status == 200)
      yield put(fetchCurrentUserSuccess(response.data))
  } catch (error) {
    console.log(error)
  }
}

export default all([
  takeLatest(UserTypes.FETCH_CURRENT_USER, fetchCurrentUserSaga)
])