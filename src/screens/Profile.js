import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { Icon, Button, Container,  Header, Content, Left, Right , List , ListItem, Card, CardItem } from 'native-base'
import {onSignOut} from '../authentication'
class Profile extends Component {
    static navigationOptions = {
        header: null,
        drawerIcon: (
            <Icon name='person' size={24}/>
        )
    }

    shouldComponentUpdate(){
        return false
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
                <Content >
                    <Card>
                        <CardItem header>
                            <Text>Profile Options</Text>
                        </CardItem>
                        <CardItem>
                            <Left>
                            <Icon active name='cafe' />
                            <Text style={{
                                marginLeft: 5
                            }}>Edit Your Profile</Text>
                            </Left>
                            <Right>
                                <Icon name='arrow-forward' />
                            </Right>
                        </CardItem>
                        <CardItem button  onPress={ this.initiateSignOut}>
                        <Left>
                        <Icon active name='call' />
                        <Text style={{
                            marginLeft: 5
                        }}>Sign Out</Text>
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

    initiateSignOut = () => {
        Alert.alert('Exit?','Really sign out?', [
            {text: 'No', onPress: () => {}},
            {text: 'Yes', onPress: () => {
                onSignOut().then(() => {
                    this.props.navigation.navigate('SignedOut')
                })
            }}
        ])
    } 
}


export default Profile
