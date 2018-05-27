import { createSwitchNavigator } from 'react-navigation'
import SignedIn from './base';
import SignedOut from './signedout';

export default createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator({
        SignedIn: {
            screen: SignedIn
        },

        SignedOut: {
            screen: SignedOut
        }
    }, {
        initialRouteName: signedIn ? "SignedIn": "SignedOut"
    })
}