import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import Screens from './index'
import HomeTabNavigator from './HomeTabNavigator'


const _innerStackNavigator = createStackNavigator({
    TabNavigator: {
        screen: HomeTabNavigator
    }
})

const _DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: _innerStackNavigator
    },

    Me : {
        screen: Screens.Profile
    }
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default _DrawerNavigator

