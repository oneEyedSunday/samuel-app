import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class ScreenTwo extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>ScreenTwo</Text>
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


export default ScreenTwo