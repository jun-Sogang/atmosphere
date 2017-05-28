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
    console.log('beforeComment')
    const commentAllData = this.props.comments.map(data =>
      <Text style={styles.container}>
        <Text style={styles.artist}> {data.artist} </Text>
        <Text style={styles.title}> {data.title} </Text>
      </Text>
    );
    const commentInitialData = commentAllData.slice(0, 2);
    return (
      <View style={styles.Comment}>
        {this.props.isMusicIconSelected ? commentAllData : commentInitialData}
      </View>
    );
  }
}
