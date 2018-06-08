import { combineReducers } from 'redux'
import ActionTypes from '../actions/ActionTypes'
import SignedIn from './../../router/signedin';

const initialState = {
    signedIn: false,
    checkedSignedIn: false,
    loadingComplete: false,
    user: undefined
  }


/**
 * APP STATE IS MADE OF SMALLER STATES
 * AUTH
 * PRESENTATION AND MODALS
 * ROUTING
 * ETC
 */

 // use combineReducer to get giant app reducer 


const reducer = (state =  initialState, action) => {
    switch(action.type){
        case ActionTypes.SIGNIN:
            return {...state, loadingComplete: false}

        case ActionTypes.SIGNINSUCCESS:
            return {
                ...state,
                loadingComplete: true,
                checkedSignedIn: true,
                user: action.payload.user,
                signedIn: true
            }

        case ActionTypes.SIGNINFAILURE:
            return {...state, loadingComplete: true, checkedSignedIn: true, user: null, signedIn: false}

        case ActionTypes.TOGGLELOADINGCOMPLETE:
            console.log('loading Complete dispatched')
            return {
                ...state, loadingComplete: !state.loadingComplete
            }

        case ActionTypes.AUTHCHECKED:
            console.log('authChecked dispatched')
            return {
                ...state, checkedSignedIn: action.payload
            }

        default:
           return state;
    }
}

export default reducer


/**
 * do this to every componnet interacting with redux
 * // The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);
 */