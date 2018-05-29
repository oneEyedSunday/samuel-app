import React, { Component } from 'react'
import { StyleSheet, Text, View, Image , ScrollView} from 'react-native'
import { Icon, Button, Container,  Header, Content, Left,Thumbnail, DeckSwiper, Right , List, Body, ListItem,  Card, CardItem, CheckBox} from 'native-base'

const cards = [
    {
    text: 'Meal One',
    name: 'One',
    image: require('../../assets/food3.jpg')
    },
    {
        text: 'Meal Two',
        name: 'Two',
        image: require('../../assets/food4.jpg')
    },
    {
        text: 'Meal Three',
        name: 'Three',
        image: require('../../assets/food5.jpg')
    }
]
class Home extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: (
            {tintColor}) => (<Icon name='md-home' size={30} color={tintColor}/>
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
                
               <DeckSwiper dataSource={cards} renderItem={item =>
               <Card style={{ elevation: 3 }}>
                   <CardItem>
                   <Left>
                       <Thumbnail source={item.image} />
                       <Body>
                       <Text>{item.text}</Text>
                       <Text note>NativeBase</Text>
                       </Body>
                   </Left>
                   </CardItem>
                   <CardItem cardBody>
                   <Image style={{ height: 300, flex: 1 }} source={item.image} />
                   </CardItem>
                   <CardItem>
                   <Icon name="heart" style={{ color: '#ED4A6A' }} />
                   <Text>{item.name}</Text>
                   </CardItem>
               </Card>
               }
                />
            </Container>
        )
    }
}


export default Home
