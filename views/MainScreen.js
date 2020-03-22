import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import StoreList from '../components/StoreList';
import AppbarComp from '../components/AppbarComp';
import StoreCardList from '../components/StoreCardList';
import { Constants } from 'expo';

export default class MainScreen extends Component{
    render(){
        console.log(StatusBar.currentHeight);
        return(
            <View style={styles.container}>
                <AppbarComp style={styles.appBarStyle}/>
                <StoreCardList style={styles.storeListStyle}/>
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