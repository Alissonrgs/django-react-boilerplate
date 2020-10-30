import { all } from 'redux-saga/effects'

import current_user_saga from './current_user/sagas'


export default function* rootSaga() {
  return yield all([
    current_user_saga
  ])
}