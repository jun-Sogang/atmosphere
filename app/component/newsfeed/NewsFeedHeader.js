import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
  FB_Header: {
    marginTop: 20,
    height: 56,
    backgroundColor: 'white',
    padding: 0,
    borderBottomWidth: 1.5,
    borderColor: 'rgba(255, 208, 208,0.87)',
  },
  text_logo: {
    marginTop: 12,
    color: 'rgba(0,0,0,0.87)',
    letterSpacing: -0.7,
    fontSize: 18,
    textAlign: 'center',
    height: 18,
  },
  text_sub: {
    color: 'rgba(0,0,0,0.87)',
    letterSpacing: -0.7,
    fontSize: 10,
    textAlign: 'center',
  },
});

export default class NewsFeedHeader extends Component {
  render() {
    return (
      <View style={styles.FB_Header}>
        <Text style={styles.text_logo}>Atmosphere{'\n'}</Text>
        <Text style={styles.text_sub}>Experience Music in a New Way</Text>
      </View>
    );
  }
}


