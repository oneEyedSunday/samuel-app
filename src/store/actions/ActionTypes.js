/*
    signedIn: false,
    checkedSIgnedIn: false,
    loadingComplete: false,
    user: undefined
*/

const SIGNIN = '[AUTH] SIGN IN'
const SIGNINSUCCESS = '[AUTH] SIGNINSUCCESS'
const SIGNINFAILURE = '[AUTH] SIGNINFAILURE'
const TOGGLELOADINGCOMPLETE = '[UI] TOGGLELOADINGCOMPLETE'
const AUTHCHECKED = '[AUTH] CHECKED'

const SIGNOUT = '[AUTH] SIGNOUT'

const Actions = {
    SIGNIN,
    SIGNINSUCCESS,
    SIGNINFAILURE,
    TOGGLELOADINGCOMPLETE,
    AUTHCHECKED
}


export default Actions