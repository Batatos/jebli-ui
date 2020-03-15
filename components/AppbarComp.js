import React, {Component} from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class AppBarComp extends Component{
    render(){
        return(
            <Appbar style={styles.top} >
                <Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
            </Appbar>
        );
    }
}

const statusBarHeight = getStatusBarHeight();

const styles = StyleSheet.create({
    top: {
      position: 'relative',
      left: 0,
      right: 0,
      top: 0,
    },
});