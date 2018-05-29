import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Day extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.makeCanvas}> Breakfast </Text>
            </View>
            <View style={styles.card}>
                <Text  style={styles.makeCanvas}> Lunch </Text>
            </View>
            <View style={styles.card}>
                <Text  style={styles.makeCanvas}> Dinner </Text>
            </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    card: {
        flex: 1,
        // borderColor: 'red',
        borderWidth: 2,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    makeCanvas: {
        fontWeight: '500',
        fontFamily: 'Roboto',
    }
})