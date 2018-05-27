import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image } from 'react-native'
import { onSignIn } from '../authentication'
// styles 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
   
    formContainer: {
       padding: 10,
    //    flexGrow: 2,
       backgroundColor: 'black',
       width: 300
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225, 225, 225, 0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
    },
    buttonText:{
        textAlign: 'center',
        color: '#fff'
    }
})


class Login extends Component  {
        
        state = {
            email : 'beggining@email.me',
            password: 'trunk'
        }

        render(){
            const goToSignUp = () => {
                this.props.navigation.navigate('SignUp')
                // implement move to sign up
            } 
            console.log(this.props)
            return (
                <View style={styles.container} >
                    <View  style={styles.formContainer}>
                        <View>
                            <TextInput style={styles.input} autoCorrect={false} keyboardType="email-address" returnKeyType="next" value = {this.state.email } onChangeText={v => this.setState({ email: v })}
                            placeholder='Email'  />
                    
                            <TextInput style={styles.input}   returnKeyType="go" placeholder='Password' secureTextEntry value={this.state.password} onChangeText={v => this.setState({password: v})} />
                    
                            <TouchableOpacity style={styles.buttonContainer} onPress={() => { onSignIn().then(() => this.props.navigation.navigate('SignedIn')) }} >
                                <Text style={styles.buttonText}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                    <Button onPress={goToSignUp} title="No acount? Sign Up" color="#841584" accessibilityLabel="Learn more about this purple button" />
                    </View>
                 </View>
            )
        }
       
    }


export default Login