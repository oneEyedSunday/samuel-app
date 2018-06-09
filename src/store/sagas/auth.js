import { call, put, takeLatest, all } from 'redux-saga/effects'
import Actions from  '../actions/ActionTypes'
import {signInSuccess } from '../actions'
import { signInWithGoogleAsync } from '../../authentication/googleAuth'
function trySignIn(){}

function* signinFlow (action){
    console.log('saga')
    try {
         // call api
        console.log('From saga - ', action.payload)
        if (action.payload === Actions.GOOGLE){
            // call googleOauth
            const response = yield call(signInWithGoogleAsync)
            yield put(signInSuccess(response))
        }
        // put success
    } catch (error) {
        // put error
    }
}

// watches for SIGNIN action type
// calls signinFlow
// with action dispatched
function* signinWatcher(){
    console.log('inside siginwatcher')
    yield takeLatest(Actions.SIGNIN, signinFlow)
}

export default function*() {
    yield all([
        takeLatest(Actions.SIGNIN, signinFlow)
    ])
}

