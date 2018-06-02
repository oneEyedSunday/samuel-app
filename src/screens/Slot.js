import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image } from 'react-native';

export default Slot = props => (
    <View style={styles.imageContainer}>
        <Text style={styles.imageText}> {props.mealType} |{props.meal} </Text>
        <Image source={props.imageSrc} style={styles.image} resizeMode="cover"/>
    </View>
)


const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    imageText: {
        fontWeight: '500',
        paddingVertical: 15,
        fontSize: 20,
        fontFamily: 'Roboto',
        // height: 60,
        alignSelf: 'center',
    },
    image: {
        flex: 1,
        width: null
    }
})