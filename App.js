/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow 
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import codePush from "react-native-code-push";
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu This is IOS!!s',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'This is Android!!! Live reload',
});

type Props = {};
export default class App extends Component<Props> {

  onButtonPress() {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Updated App!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={this.onButtonPress}>
          <Text>Check for updates</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
