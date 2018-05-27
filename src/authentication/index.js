import { AsyncStorage } from 'react-native'

export const onSignIn = () => AsyncStorage.setItem('usrAuthKey', 'true')

export const onSignOut = () => AsyncStorage.removeItem('usrAuthKey')

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('usrAuthKey')
            .then(res => {
                res !== null ? resolve(true) : resolve(false) 
            })
            .catch(err => reject(err))
    })
}