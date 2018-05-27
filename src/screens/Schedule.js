import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Schedule extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Schedule</Text>
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


export default Schedule