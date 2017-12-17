/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
var base64 = require('base-64');
var utf8 = require('utf8');
var RNFS = require('react-native-fs');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        paddingTop: 20,
        backgroundColor: '#e5e5e5',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 10,
      },
      icon: {
          paddingBottom: 2,
      },
});

export default class AddPerson extends Component {
    static navigationOptions = {      
            tabBarLabel: 'Add Person',
            tabBarIcon: ({tintColor}) => {
                <Icon 
                   name= {'plus'}
                   size= {70}
                   style= {[{color: tintColor}, styles.icon]}
                />
            }
    }

    render(){    
        // create a path you want to write to
        var textInput = 'Lorem ipsum dolor sit amet';
        var newArray = textInput.slice(0,3);
         console.log(newArray);
        var bytes = utf8.encode(textInput);
        console.log(bytes);
        var encoded = base64.encode(bytes);
       
        console.log(encoded);
        var path = RNFS.ExternalDirectoryPath+ '/test.txt';
        
        // write the file
        RNFS
            .writeFile(path, encoded, 'utf8')
            .then((success) => {
                console.log('FILE WRITTEN!');
            })
            .catch((err) => {
                console.log(err.message);
            });
        return(
            <View style={styles.container}>
               <Text>Add Person </Text>
            </View>
        )
    }
}