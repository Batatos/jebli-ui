import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Button, Text, ListItem } from 'react-native-elements';

class StoreCardList extends Component {


    localhostURL = '10.0.0.5';

    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          dataSource:[]
        };
    }

    componentDidMount(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        //headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
        headers.append('Origin','http://'+this.localhostURL+':3000');
        fetch("http://10.0.0.5:3000/stores", {mode: 'cors'})
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           loading: false,
           dataSource: responseJson
          })
        })
        .catch(error=>console.log("Catched error: " + error)) //to catch the errors if any
    }

    
  render() {


    if(this.state.loading){
        return( 
          <View style={styles.loader}> 
            <ActivityIndicator size="large" color="#0c9"/>
          </View>
    )}

    return (

        this.state.dataSource.map((u, i) => {
          return (
            <ListItem
              // key={i}
              roundAvatar
              title={u.name}
              // avatar={{uri:u.avatar}}
            />
          );
        })
 
    );
  }
}

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      height: 24
  },  
  item: {  
      padding: 10,  
      fontSize: 18,  
      height: 44,  
  },
  loader:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
  },  
})  

export default StoreCardList;