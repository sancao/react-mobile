/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Login from './Login';
import Loader from './Loader';
import PeopleList from './PeopleList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/PeopleReducer';
import Navigation from './Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {
    state = {
          loggedIn: null
    };
    componentWillMount() {
        firebase.initializeApp({
          apiKey: "AIzaSyBa1cMxWY-0n6IgKAVb47UiJbbIYRNJij4",
          authDomain: "crmlinledin.firebaseapp.com",
          databaseURL: "https://crmlinledin.firebaseio.com",
          projectId: "crmlinledin",
          storageBucket: "crmlinledin.appspot.com",
          messagingSenderId: "653381859990"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
              this.setState({loggedIn: true});
            } else {
              this.setState({loggedIn: false});
            }
        });
    }

    renderInitialView(){
      switch(this.state.loggedIn){
        case true:
            return <PeopleList />      
        case false:
            return <Login />
        default: <Loader size="large" />
      }
    }

  render() {
    return (
      <Provider store={store}>
      <View >
         {this.renderInitialView()}
      </View>
      </Provider>
    );
  }
}
