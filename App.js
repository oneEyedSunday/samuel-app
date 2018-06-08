import React from 'react';
import { Provider, connect } from 'react-redux'
import { AppLoading, Asset, Font } from 'expo'
// import { Ionicons, FontAwesome } from '@expo/vector-icons'

import store from './src/store'
import { toggleLoading, authChecked } from './src/store/actions'

// TODO: drawer navigation in normal flow


// routers
/*
import SignedOut from './src/router/signedout';
import SignedIn  from './src/router/signedin';
import {isSignedIn}  from './src/authentication'
*/
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
      loadingComplete: false
    }
    /*
    this.state = {
      signedIn: false,
      checkedSIgnedIn: false,
      loadingComplete: false,
      user: undefined
    }
    */
  }

  componentDidMount(){
    // where does persisiting auth token happen
    // need 
    /*
    isSignedIn()
      .then(res => this.setState({
        signedIn: res,
        checkedSIgnedIn: true
      }))
      .catch(err => alert('An error occured tryin to auth'))
      */
     store.dispatch(authChecked(true))
    //  store.dispatch(toggleLoading())
    }

    

  render() {
    console.log(store.getState())
    console.log(this.state)
  
    if (!this.state.loadingComplete) {
      return (
        <AppLoading startAsync={this._loadResourcesAsync} onError={this._handleLoadingError} onFinish={this._handleFinsihLoading} /> 
      )
    }

    console.log('layout sequence')
    
    const { checkedSIgnedIn, signedIn } = store.getState()
    if (checkedSIgnedIn == false){
      console.log('i am here, checkSignedIn')
      return null
    }
    console.log(signedIn)
    const Layout = createRootNavigator(signedIn)
    const ConnectedRoot = connect(mapStateToProps)(Layout)
    return (
      <Provider store={store} >
        <Layout />
      </Provider>
      
    )
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
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          FontAwesome: require('@expo/vector-icons/fonts/FontAwesome.ttf')
        })
      ])
    }

    _handleLoadingError = error => {
      console.warn(error)
    }

    _handleFinsihLoading = () => {
      // toggle loading complete
      this.setState({
        loadingComplete: true
      })
      // store.dispatch(toggleLoading())
      // console.log('returns with ', store.getState())
    }
}

mapStateToProps = state => {
  const s = {
    checkedSignedIn: state.checkedSIgnedIn,
    signedIn: state.signedIn,
    loadingComplete: state.loadingComplete,
    user: state.user
  }
  console.log(s)
  return s
}

export default App
