import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator, createStackNavigator } from 'react-navigation'
import Screens from './src/screens'
import DrawerNav from './src/screens/DrawerNavigator'

export default class App extends React.Component {
  render() {
    return (
      <_StackNavigator />
    );
  }
}


// new StackNavigator deprecated
const _StackNavigator = createStackNavigator({
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
