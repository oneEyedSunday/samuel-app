import { createStackNavigator } from 'react-navigation';
import Screens from '../screens'

export default SignedOut = createStackNavigator({
    SignIn:{
        screen: Screens.Welcome,
        navigationOptions: {
            header: null
        }
    },
    SignUp:{
        screen: Screens.Signup
    }
})