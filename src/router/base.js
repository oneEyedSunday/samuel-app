import React, { Component } from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Screens from '../screens'
import SignedIn from '../router/signedin'

const _DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: SignedIn
    },

    Profile : {
        screen: Screens.Profile
    },

    Settings: {
        screen: Screens.Settings
    }
})

export default _DrawerNavigator

