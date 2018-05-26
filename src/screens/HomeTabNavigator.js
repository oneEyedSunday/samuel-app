import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation'
import ScreenOne from './TabNavigator/ScreenOne'
import ScreenTwo from './TabNavigator/ScreenTwo'

const HomeTabNavigator = createBottomTabNavigator({
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon:  () =>  <Ionicons name='md-compass' size={24} /> 
        }
    },

    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon:  () =>  <Ionicons name='md-compass' size={24} /> 
        }
    },
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default class AppTabNavigator extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: (
                <View style={{ padding: 10 }}>
                {/* doesnt ork */}
                    <Ionicons name='md-menu' size={24} onPress={ () => navigation.navigate('DrawerToggle')} />
                </View>
            )
        }
    }


    render(){
        return (
            <HomeTabNavigator />
        )
    }
}

// export default HomeTabNavigator 