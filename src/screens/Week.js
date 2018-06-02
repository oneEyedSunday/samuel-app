import React, { Component } from 'react'
import {  StyleSheet , ScrollView} from 'react-native'
import api from '../api/Foods'
import Day from './Day';

export default class Week extends Component {
  render() {
    return (
        
        <ScrollView style={styles.container}>
            {
                api.map(day => (
                    <Day key={day.date} dayOfTheWeek = 'aDay'  plan={day} displayType={1}/>
                ))
            }
        </ScrollView>
        
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})