import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import Screens from '../screens'
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from 'react-native-vector-icons'

// add a generic screen as home for any content from site
export default SignedIn = createBottomTabNavigator({
    Home:{
        screen: Screens.Home,
        tarBarLabel: 'Feed',
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name='md-home' size={30} />
        )
    },
    Foods: {
        screen: Screens.Foods,
        navigationOptions: {
            tabBarLabel: 'Foods',
            tabBarIcon: ({tintColor}) => (
                <FontAwesome name='home' size={30} color={tintColor} />
            )
        }
    },
    Schedule: {
        screen: Screens.Schedule,
        navigationOptions:{
            tabBarLabel: 'Schedule',
            tarBarIcon: ({tintColor}) => (
                <FontAwesome name='flask' size={30} color={tintColor} />
            )
        }
    }
})