import Expo from 'expo'
import { persistToken } from './index';

export async function logIn(){
    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync('1238366079626666',{
        permissions: ['public_profile', 'email', 'user_friends']
    })

    if (type  === 'success'){
        try {
            await persistToken(token)
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}`
                // `https://graph.facebook.com/v3.0/100026500124359/picture?redirect=false&access_token=${token}`
            )
            return response.json()
        } catch (error) {
            console.error(error)
        }   
    }
}