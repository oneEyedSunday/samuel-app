import React, { Component } from 'react'
import { Text, View, StyleSheet , Image} from 'react-native'
import api from '../api/Foods'
import { getMonth , splitMonth, splitDay }  from '../api/Helpers'
import Slot from './Slot'
import FoodImages from "myassets/images"


export default class Day extends Component {
    constructor(props){
        super(props)
        // this.getHeight = this.getHeight.bind(this)
        this.styles = this.createStyles(this.props.displayType)
    }

    // use componentWillMount
    createStyles = context => {
        const stylesObject = {
            container: {
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#fff'
            },
            dayDetails: {
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 50,
            },
            dayDetailText : {
                flex: 1,
                fontSize: 50,
            },
            planDetails: {
                flex: 2,
            },
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
        }

        if (context) {
            stylesObject.container.height = 400
            stylesObject.planDetails.flexDirection = 'row'
            stylesObject.planDetails.flex = 3
        } 
        const styles = StyleSheet.create(stylesObject)
        return styles
    }
 
  render() {
    // displayType is to specify whether the component should displayhorizontally or vertically
    // showType is to specify whether the component should display all info
    // particularly for Month view, where it might get too clogged

    // TODO: refactor View with style imageContainer to Slot component
    let { displayType, showType, dayOfTheWeek , plan }  = this.props
    let monthOfTheYear = splitMonth(plan.date)
    return (
        <View style={this.styles.container}>
            <View style={this.styles.dayDetails}>
                <Text style={this.styles.dayDetailText}>{dayOfTheWeek}</Text>
                <Text style={this.styles.dayDetailText} >{ getMonth(monthOfTheYear) }</Text>
                <Text style={this.styles.dayDetailText}>{splitDay(plan.date)}</Text>
            </View>
            <View style={this.styles.planDetails} >
                <Slot mealType='Breakfast' meal={plan.breakfast.meal}  imageSrc={FoodImages[plan.breakfast.mealImageUrl]}/>
                <Slot mealType='Lunch' meal={plan.lunch.meal}  imageSrc={FoodImages[plan.lunch.mealImageUrl]}/>
                <Slot mealType='Dinner' meal={plan.dinner.meal} imageSrc={FoodImages[plan.dinner.mealImageUrl]} />
            </View>
        </View>
    )
  }
}
