import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

class LoginForm extends Component{

    render(){
        return(
            <View>
               <Input
                placeholder='USERNAME'
                // leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                /> 
                <Input
                placeholder='PASSWORD'
                />
                <Button
                title="LOGIN"
                type="raised"
                color="white"
                />
            </View>
        )
    }
}

export default LoginForm;

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