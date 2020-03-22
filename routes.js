import createAppContainer from 'react-navigation';
import createStackNavigator from 'react-navigation-stack';
import LoginScreen from './views/LoginScreen';
import MainScreen from './views/MainScreen';

const BeforeSignin = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    }, {
        headerMode: "none",
        initialRouteName: "Login"
})

const AfterSignin = createStackNavigator({
    Dashboard: {
        screen: MainScreen
    }
}, {
    headerMode: "none",
    initialRouteName: "Dashboard"
})

const AppNavigator = createStackNavigator({
    Auth: BeforeSignin,
    App: AfterSignin
}, {
    headerMode: "none",
    initialRouteName: "Auth"
})

export default createAppContainer(AppNavigator);