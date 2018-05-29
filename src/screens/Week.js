import React, { Component } from 'react'
import { Text, View, StyleSheet , ScrollView} from 'react-native'

export default class Week extends Component {
  render() {
    return (
        
        <ScrollView>
            <View style={styles.card}>
                <Text style={styles.makeCanvas}> Sunday </Text>
            </View>
            <View style={styles.card}>
                <Text  style={styles.makeCanvas}> Monday </Text>
            </View>
            <View style={styles.card}>
                <Text  style={styles.makeCanvas}> Tuesday </Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.makeCanvas}> Wednesday </Text>
            </View>
            <View style={styles.card}>
                <Text  style={styles.makeCanvas}> Thursday </Text>
            </View>
            <View style={styles.card}>
                <Text  style={styles.makeCanvas}> Friday </Text>
            </View>
            <View style={styles.card}>
                <Text  style={styles.makeCanvas}> Saturday </Text>
            </View>
        </ScrollView>
        
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    card: {
        height: 300,
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