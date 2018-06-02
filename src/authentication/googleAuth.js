import Expo from 'expo'
import { persistToken } from './index';

export async function signInWithGoogleAsync(){
    try{
        const result = await Expo.Google.logInAsync({
            androidClientId: '114756771-43ue6cfugbqkpjcqkg7i8gad7ua0nuel.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        })
        // console.log(result)
        if (result.type == 'success'){
            try {
                await persistToken(result.accessToken)
                return result
            } catch (error) {
                console.error(error)                
            }
           
        } else {
            return {
                cancelled: true
            }
        }
    } catch (e){
        return {
            error: true
        }
    }
}

