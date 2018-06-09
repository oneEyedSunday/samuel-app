import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware  from 'redux-saga'
import reducer from './reducers'
import { initSagas } from './sagas'

const sagaMiddleware = createSagaMiddleware()


function configureStore(){
    
    let store = createStore(reducer, applyMiddleware(sagaMiddleware))
    // run root saga
    initSagas(sagaMiddleware)
    return store
}


export default configureStore()