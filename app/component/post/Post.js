/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.welcome}>
          post\n
        </Text>
        <TextInput placeholder="<TextInput />" />
        <Text style={styles.instructions}>
          posted time
        </Text>
      </View>
    );
  }
}