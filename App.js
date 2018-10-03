/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import Header from './src/ortak/Header';
import LoginForm from './src/LoginForm';
import CardSection from './src/ortak/CardSection';
import Button from './src/ortak/Button';
import Spinner from './src/ortak/Spinner';

export default class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('kullanıcı var');
          this.setState({ loggedIn: true });
        } else {
          console.log('kullanıcı yok');
          this.setState({ loggedIn: false });
        }
    });
  }

  clickLogout() {
  firebase.auth().signOut();
}

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={this.clickLogout.bind(this)}> ÇIKIŞ </Button>
        </CardSection>
      );
      case false:
        return (
          <LoginForm />
      );
      default:
       return (
         <View>
          <Spinner size="large" />
         </View>
       );

    }
  }

  render() {
    return (
      <View>
        <Header headerText='Giriş Ekranı' />
        {this.renderContent()}
      </View>
    );
  }
}
