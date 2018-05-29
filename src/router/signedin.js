import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import Screens from '../screens'
import { Icon } from 'native-base';


// add a generic screen as home for any content from site
export default SignedIn = createBottomTabNavigator({
    Home:{
        screen: Screens.Home,
        tarBarLabel: 'Home'
    },
    Foods: {
        screen: Screens.Foods,
        navigationOptions: {
            tabBarLabel: 'Foods',
            tabBarIcon: ({tintColor}) => (
                <Icon name='pizza' size={30} color={tintColor} />
            )
        }
    },
    Schedule: {
        screen: Screens.Schedule,
        tabBarLabel: 'Schedule'
    }
},  {
    tarBarOptions: {
        showIcon: true
    }
})