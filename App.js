import React from 'react';


// TODO: drawer navigation in normal flow


// routers
import SignedOut from './src/router/signedout';
import SignedIn  from './src/router/signedin';
import {isSignedIn}  from './src/authentication'
import createRootNavigator from './src/router/root';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      signedIn: false,
      checkedSIgnedIn: false
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
    const { checkedSIgnedIn, signedIn } = this.state

    if (!checkedSIgnedIn){
      return null
    }
    const Layout = createRootNavigator(signedIn)
    return <Layout />
    }
}

export default App;
