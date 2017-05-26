import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import AlarmHeader from './AlarmHeader';
import AlarmBox from './AlarmBox';

const styles = StyleSheet.create({
  Alarm: {
    flex: 1,
  },
});

export default class Alarm extends Component {
  render() {
    return (
      <View style={styles.Alarm}>
        <AlarmHeader />
        <AlarmBox />
      </View>
    );
  }
}
