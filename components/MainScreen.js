import React, {Component} from 'react';
import { AppRegistry, FlatList,  
    StyleSheet, Text, View,Alert, ActivityIndicator, TouchableOpacity } from 'react-native';

class MainScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          dataSource:[]
        };
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           loading: false,
           dataSource: responseJson
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
    }

    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };  
    //handling onPress action  
    getListViewItem = (item) => {  
        Alert.alert(item.key);  
    }  

    renderItem=(data)=>
    <TouchableOpacity style={styles.list}>
    <Text style={styles.lightText}>{data.item.name}</Text> 
    <Text style={styles.lightText}>{data.item.email}</Text>
    <Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity>

    render(){
        if(this.state.loading){
            return( 
              <View style={styles.loader}> 
                <ActivityIndicator size="large" color="#0c9"/>
              </View>
        )}

        return(
            <View style={styles.container}>  
                <FlatList  
                    data= {this.state.dataSource}
                    ItemSeparatorComponent = {this.renderSeparator}
                    renderItem= {item=> this.renderItem(item)}
                    keyExtractor= {item=>item.id.toString()} 
                />  
            </View> 
        );
    }
   
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
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
  
  
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);

export default MainScreen;
