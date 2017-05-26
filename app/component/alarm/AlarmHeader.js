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
    justifyContent: 'center',
  },
  text_title: {
    color: 'rgba(0,0,0,0.87)',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default class AlarmHeader extends Component {
  render() {
    return (
      <View style={styles.FB_Header}>
        <Text style={styles.text_title}>Notification</Text>
      </View>
    );
  }
}