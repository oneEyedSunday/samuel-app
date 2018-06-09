import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'
import { signInWithGoogleAsync } from '../authentication/googleAuth'
import { logIn } from '../authentication/facebookAuth'
import * as fromAuth from '../authentication'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { signIn} from '../store/actions'
import Actions from '../store/actions/ActionTypes'


class Login extends Component  {
    /*
    state = {
        user: undefined
    }
    */

    // move these to actions
    // use sagas for async, 
    loginWithFacebook = async () => await logIn().then(res => {
        Alert.alert(
            'Logged in!',
            `Hi ${res.name}!`,
          );

         const data = fetch(`https://graph.facebook.com/${res.id}/picture?type=large`).then(response => {
             if (response.status === 200){
                res.photoUrl = response.url
                this.setState({
                    user: res
                })
                this.props.navigation.navigate('SignedIn')
             }
         })

        fromAuth.persistToken()
    })


    loginWithGoogle = async () => await signInWithGoogleAsync().then(res => {
        // alert(res.user.name)
        // change state to be able to nav
        this.setState({
            user: res.user
        })
        // save Token for any 'offline' use

        // delay so can see who signed in as
        // TODO: display a snackbar to say signed in as Username
        // alternatively, let them see who they signed in as then choose to proceed
        
        this.props.navigation.navigate('SignedIn')
         
    }).catch(err => {
        console.error(err)
        // alert something went wrong
    })


    render(){
        let { user } = this.props
        return (
            <View style={styles.container}>  
                {
                user ? (
                    <View style={styles.content}>
                        <Text style={styles.header}>Welcome {user.name}</Text>
                        <View style={styles.avatar}>
                            <Image source={{ 
                                uri: user.photoUrl
                             }} style={styles.avatarImage}/>
                        </View>
                    </View>
                )
                : 
                        <View style={styles.content}>
                            <Text style={styles.header} >Welcome Stranger!</Text>
                            <View style={styles.avatar}>
                                <Icon name='user-circle' size={100}  color="rgba(0,0,0,.09)" />
                            </View>
                            <Text style={styles.text}>Please log in to continue to the awesomeness</Text>
                        </View>
            }
            {
                user ? null : 
                        <View style={styles.buttons}>
                            <Icon.Button name='facebook' backgroundColor='#3b5998' onPress={this.loginWithFacebook} {...iconStyles} >
                                Login with Facebook
                            </Icon.Button>
                            <Icon.Button name='google' backgroundColor='#dd4b39' onPress={this.props.attemptSignIn.bind(null, Actions.GOOGLE)} {...iconStyles} >
                                Login with Google
                            </Icon.Button>
                        </View>                   
            }   
            </View>
        )
    }
       
}


const iconStyles = {
    borderRadius: 10,
    paddingBottom: 5,
    iconStyle: {
        paddingVertical: 5,
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginHorizontal: 10,
    },
    content : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar : {
        margin: 20
    },
    avatarImage: {
        borderRadius: 50,
        height: 100,
        width: 100
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    text: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    },
    buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30
    }
})


const mapStateToProps = state => ({
    user : state.user
})

const mapDispatchToProps = dispatch => ({
    attemptSignIn: provider => { dispatch(signIn(provider)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)