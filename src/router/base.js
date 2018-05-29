import React, { Component } from 'react'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import Screens from '../screens'
import SignedIn from '../router/signedin'
import { Container, Header, Body, Content, Icon,Right, Left } from 'native-base'
import { Image, Text } from 'react-native'

const CustomDrawer = props => (
    <Container>
        <Header style={{
            height: 200
        }}>
            <Left />
            <Body>
                <Image  source={
                    require('../../assets/avatarDarkFemale.jpg')
                } style={{
                    height: 150,
                    width: 150,
                    borderRadius: 75
                }}/>
            </Body>
            <Right />
        </Header>
        <Content>
                <DrawerItems {...props} />
        </Content>
    </Container>
)

const _DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: SignedIn,
        navigationOptions: {
            drawerIcon: (
                <Icon name='home' size={24} />
            )
        }
    },

    Profile : {
        screen: Screens.Profile
    },

    Settings: {
        screen: Screens.Settings
    }
}, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
})

export default _DrawerNavigator

