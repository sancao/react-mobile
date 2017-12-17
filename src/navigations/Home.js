/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform , Text, View, StyleSheet, StatusBar, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TabNavigator } from 'react-navigation';
import App from '../components/App';
import AddPerson from '../components/AddPerson';


class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option
        // below.
        // tabBarIcon: ({tintColor}) => (<Image
        //     source={require('./chats-icon.png')}
        //     style={[
        //     styles.icon, {
        //         tintColor: tintColor
        //     }
        // ]}/>)
    };

    render() {
        return (
             <App />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        // tabBarIcon: ({tintColor}) => (<Image
        //     source={require('./notif-icon.png')}
        //     style={[
        //     styles.icon, {
        //         tintColor: tintColor
        //     }
        // ]}/>)
    };

    render() {
        return (        
            <View>
                 
                 <Text>Login</Text>
            </View>
        );
    }
}

class AddPersons extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Add Person',
        // tabBarIcon: ({tintColor}) => (<Image     source={require('./notif-icon.png')}
        //     style={[     styles.icon, {         tintColor: tintColor     } ]}/>)
    };

    render() {
        return (
            <AddPerson />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20
    }
});

const MyApp = TabNavigator({
    Home: {
        screen: Home
    },
    Notifications: {
        screen: MyNotificationsScreen
    },
    AddPerson: {
        screen: AddPersons
    }
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63'
    }
});

export default MyApp;