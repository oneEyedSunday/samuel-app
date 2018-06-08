import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

function configureStore(){
    let store = createStore(reducer)
    return store
}


export default configureStore()