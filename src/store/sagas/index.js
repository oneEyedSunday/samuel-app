/*
import {all, fork} from 'redux-saga/effects'
import auth from './auth'

export default function* rootSaga(){
    yield all([
        fork(auth)
    ])
}
*/

import auth from './auth'
const sagas = [
    auth
]

export const initSagas = sagaMiddleware => sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware))