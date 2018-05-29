import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { Icon, Button, Container,  Header, Content, Left, Right, Card,  CardItem } from 'native-base'
class Settings extends Component {
    static navigationOptions = {
        header: null,
        drawerIcon: (
            <Icon name='settings' />
        )
    }



    render(){
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name='menu' onPress={
                            this.props.navigation.toggleDrawer
                        } style={{
                            paddingTop: 20
                        }}></Icon>
                    </Left>
                    <Right></Right>
                </Header>
                <Content>
                   <Card>
                        <CardItem header>
                            <Text>Settings</Text>
                        </CardItem>
                        <CardItem>
                            <Left>
                            <Icon active name='settings' />
                            <Text style={{
                                marginLeft: 5
                            }}>Schedules</Text>
                            </Left>
                            <Right>
                                <Icon name='arrow-forward' />
                            </Right>
                        </CardItem>
                        <CardItem>
                        <Left>
                        <Icon active name='notifications' />
                        <Text style={{
                            marginLeft: 5
                        }}>Notifications</Text>
                        </Left>
                        <Right>
                            <Icon name='arrow-forward' />
                        </Right>
                    </CardItem>
                   </Card>
                </Content>
            </Container>
        )
    }
}


export default Settings
