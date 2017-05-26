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
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  artist: {
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    fontSize: 12,
  },
});

export default class FeedBoxComment extends Component {
  render() {
    return (
      <View style={styles.Comment}>
        <Text style={styles.container}>
          <Text style={styles.artist}> Adele </Text>
          <Text style={styles.title}> Hello </Text>
        </Text>
        <Text style={styles.container}>
          <Text style={styles.artist}> Kanye West </Text>
          <Text style={styles.title}> Gold Digger </Text>
        </Text>
      </View>
    );
  }
}

