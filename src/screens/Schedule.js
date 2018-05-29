import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Content, Tab, Tabs, Body, Title, Left, Right , Icon} from 'native-base';
import DayTab from './Day'
import WeekTab from './Week'
/**
 * Refactor Day, week and Month tabs to accept props 
 * and use init data from constructor to build
 */
class Schedule extends Component {
    static navigationOptions = {
        tabBarIcon: (
            {tintColor}) => (<Icon name='md-calendar' size={30} color={tintColor}/>
        )
    }

    render(){
        return (
            <Container>
                <Header hasTabs>
                    <Body style={{
                        paddingTop: 25
                    }}>
                    <Title>Schedule</Title>
                    </Body>
                </Header>
                <Tabs>
                <Tab heading="Day">
                    <DayTab />
                </Tab>
                <Tab heading="Week" >
                    <WeekTab />
                </Tab>
                {
                    /*
                <Tab heading="Month">
                    <Text>Campaign</Text>
                </Tab>
                    */
                }
                </Tabs>
            </Container>
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