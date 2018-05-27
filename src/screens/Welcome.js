/**
 * This is the welcome page
 * landing page of app
 * authentication will occur here, 
 * remember to make this invisible or the transition seamless if user is logged in already
 * 
 * Will contain login component and signup
 * forgot password to come later
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import Login from './Login';


class Welcome extends Component {
    static navigationOptions = {
        header: null
    }

   
    render(){
        return (
            <View style={styles.container}> 
                <Login navigation={this.props.navigation}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        backgroundColor:  'rgba(225, 225, 225, 0.2)'
    }
})


export default Welcome
