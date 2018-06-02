import { AsyncStorage } from 'react-native'

export const persistToken = async token => AsyncStorage.setItem('usrAuthKey', token)

export const destroyToken = async () => AsyncStorage.removeItem('usrAuthKey')

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('usrAuthKey')
            .then(res => {
                res !== null ? resolve(true) : resolve(false) 
            })
            .catch(err => reject(err))
    })
}
