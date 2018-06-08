import  Actions from './ActionTypes'


export function signIn (){
    return {
        type: Actions.SIGNIN
    }
}


export function signInSuccess (user){
    // send back user data
    return {
        type: Actions.SIGNINSUCCESS,
        payload: user
    }
}


export function signInFailure(error){
    return {
        type: Actions.SIGNINFAILURE,
        payload: error
    }
}

export function toggleLoading(){
    return {
        type: Actions.TOGGLELOADINGCOMPLETE
    }
}


export function authChecked(status){
    return {
        type: Actions.AUTHCHECKED,
        payload: status
    }
}