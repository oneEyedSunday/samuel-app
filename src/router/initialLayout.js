import { createStackNavigator } from 'react-navigation';
import Screens from '../screens'
import DrawerNav from '../screens/DrawerNavigator'

const _StackNavigator = createStackNavigator({
    Welcome:{
      screen: Screens.Welcome
    },
  
    Home:{
      screen: Screens.Home
    },
  
    Foods: {
      screen: Screens.Foods
    },
  
    Profile: {
      screen: Screens.Profile
    },
  
    Login: {
      screen: Screens.Login
    },
  
    Signup: {
      screen: Screens.Signup
    },
  
    DrawerNavigator: {
      screen: DrawerNav,
      navigationOptions: {
        header: null
      }
    }
  }, {
    navigationOptions: {
      gesturesEnabled: false
    }
  }) 

  export default _StackNavigator