import React from 'react';
import { AppLoading, Asset, Font } from 'expo'
import { Ionicons } from '@expo/vector-icons'

// TODO: drawer navigation in normal flow


// routers
import SignedOut from './src/router/signedout';
import SignedIn  from './src/router/signedin';
import {isSignedIn}  from './src/authentication'
import createRootNavigator from './src/router/root';
import { YellowBox } from 'react-native'

global.__old_console_warn = global.__old_console_warn || console.warn;
global.console.warn = str => {
  let tst = (str || '') + '';
  if (tst.startsWith('Warning: isMounted(...) is deprecated')) {
    return;
  }
  return global.__old_console_warn.apply(console, [str]);
};
class App extends React.Component {
  constructor(props){
    super(props)
    // YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])


    this.state = {
      signedIn: false,
      checkedSIgnedIn: false,
      loadingComplete: false
    }
  }

  componentDidMount(){
    isSignedIn()
      .then(res => this.setState({
        signedIn: res,
        checkedSIgnedIn: true
      }))
      .catch(err => alert('An error occured tryin to auth'))
  }

  render() {
    if (!this.state.loadingComplete) {
      return (
        <AppLoading startAsync={this._loadResourcesAsync} onError={this._handleLoadingError} onFinish={this._handleFinsihLoading} />
      )
    }
    const { checkedSIgnedIn, signedIn } = this.state

    if (!checkedSIgnedIn){
      return null
    }
    const Layout = createRootNavigator(signedIn)
    return <Layout />
    }

    _loadResourcesAsync = async  () => {
      return Promise.all([
        Asset.loadAsync([
          require('./assets/avatarDarkFemale.jpg'),
          require('./assets/home.png'),
          require('./assets/food1.jpg'),
          require('./assets/food2.jpg'),
          require('./assets/food3.jpg'),
          require('./assets/food4.jpg'),
          require('./assets/food5.jpg')
        ]),
        Font.loadAsync({
          // ...Ionicons.font
          Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        })
      ])
    }

    _handleLoadingError = error => {
      console.warn(error)
    }

    _handleFinsihLoading = () => {
      this.setState({
        loadingComplete: true
      })
    }
}

export default App;
