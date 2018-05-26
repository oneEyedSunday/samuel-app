import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

class Home extends Component {
    static navigationOptions = {
        header: null
    }


    render(){
        return (
            <View style={styles.container}>
                {/* Replace with login and sign up */}
                {/* profile and foods ould be drawn */}
                <Button title="Login" onPress={() => this.props.navigation.navigate('Login')} />
                <Button title="SignUp" onPress={() => this.props.navigation.navigate('Signup')} />
                <Button title="Check out Foods" onPress={() => this.props.navigation.navigate('Foods')} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default Home
