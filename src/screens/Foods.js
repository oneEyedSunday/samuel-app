import React, { Component } from 'react'
import { Image, ScrollView } from 'react-native'
import { Container, Header, Body, Content, Card, CardItem, Thumbnail, Text, Title, Left, Right, Button, Icon } from 'native-base';
class Foods extends Component {
    render(){
        return (
            <Container>
                <Header>
                    <Body>
                    <Title style={{
                        paddingTop: 25
                    }}>Foods</Title>
                    </Body>
                </Header>
                <ScrollView>
                <Card>
                    <CardItem>
                        <Icon name='flower' />
                        <Body>
                            <Text>CleanTee</Text>
                            <Text>Breakfast advice</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={require('../../assets/food1.jpg')} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem >
                    <Left>
                        <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Icon name='flower' />
                        <Body>
                            <Text>CleanTee</Text>
                            <Text>Breakfast advice</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={require('../../assets/food2.jpg')} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem >
                    <Left>
                        <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Icon name='flower' />
                        <Body>
                            <Text>CleanTee</Text>
                            <Text>Breakfast advice</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={require('../../assets/food3.jpg')} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem >
                    <Left>
                        <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                    </CardItem>
                </Card>
                </ScrollView>
            </Container>
        )
    }
}


export default Foods