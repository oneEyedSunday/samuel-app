import  Actions from './ActionTypes'


// take a payload indicating type of auth
export function signIn (provider){
    console.log(provider)
    return {
        type: Actions.SIGNIN,
        payload: provider
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


