import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
// import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

class LoginForm extends Component{

    state = {
        username: '',
        password: ''
    }

    onChangeHandle(state, value){
        this.setState({
            [state]: value
        })
    }

    doLogin(){
        const { username, password } = this.state;
        const req = {
            "email": username,
            "password": password
        }
        axios.post("https://reqres.in/api/login", req)
        .then(
            res => {
                AsyncStorage.setItem("token", res.data.token)
                .then(
                    res => {
                        alert("Login is successful");
                        this.props.navigation.navigate("App");
                    }
                )
            },
            err => {
                alert("Username or password is wrong");
            }
        )
    }

    render(){
        const { username, password } = this.state;
        return(
            <View>
               <Text h4>JEBLI LOGIN</Text>
               <Input
                placeholder='USERNAME'
                value={username}
                onChangeText={(value) => this.onChangeHandle('username', value)}
                /> 
                <Input
                placeholder='PASSWORD'
                value={password}
                onChangeText={(value) => this.onChangeHandle('password', value)}
                />
                <Button
                style={styles.button}
                title="LOGIN"
                type="outline"
                color="white"
                onPress={() => this.doLogin()}
                />
            </View>
        )
    }
}

export default LoginForm;

const styles = StyleSheet.create({
    button: {
        paddingTop: 20
    }
})