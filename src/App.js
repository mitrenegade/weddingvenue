import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
		    apiKey: "AIzaSyB24R7CEL3Dzv-XPgk9KEyX6z9UrZbMEKw",
		    authDomain: "weddingvenue-2020.firebaseapp.com",
		    databaseURL: "https://weddingvenue-2020.firebaseio.com",
		    projectId: "weddingvenue-2020",
		    storageBucket: "weddingvenue-2020.appspot.com",
		    messagingSenderId: "349349139196"
	    })
	}

    render() {
        return (
	        <View>
		    	<Header headerText="Authentication"></Header>
	        	<LoginForm />
	        </View>
        );
    }
}

export default App;