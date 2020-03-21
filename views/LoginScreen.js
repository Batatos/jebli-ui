import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';


class LoginScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.formWrapper}>
                    <LoginForm/>
                </View>
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    formWrapper: {
        width: "90%"
    }
})