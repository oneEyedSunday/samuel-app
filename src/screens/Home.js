import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

class Home extends Component {
    static navigationOptions = {
        header: null
    }


    render(){
        return (
            <View style={styles.container}>
                <Text>Home and Feed screen</Text>
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
