import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-native-paper';
import StoreList from './StoreList';
import AppbarComp from './AppbarComp';
import { Constants } from 'expo';

export default class MainScreen extends Component{
    render(){
        console.log(StatusBar.currentHeight);
        return(
            <View style={styles.container}>
                <AppbarComp style={styles.appBarStyle}/>
                <StoreList style={styles.storeListStyle}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        paddingTop: StatusBar.currentHeight
    },
    appBarStyle: {
        flex: 1
    },
    storeListStyle:{
        flex: 1
    }
})