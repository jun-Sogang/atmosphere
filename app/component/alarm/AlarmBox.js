import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

const styles = StyleSheet.create({
  AlarmBox: {
    height: 70,
    paddingLeft: 20,
  },
  profile_container: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content_container: {
    flex: 1,
  },
});

const profileImage = require('./../../img/profile.jpg');

export default class AlarmBox extends Component {
  render() {
    return (
      <View style={styles.AlarmBox}>
        <View style={styles.profile_container}>
          <Image source={profileImage} style={styles.profile} />
        </View>
        <View style={styles.content_container}>
          <Text>
            <Text>Chang Young Oh </Text>
            <Text>commented : No Ordinary Man</Text>
          </Text>
        </View>
      </View>
    );
  }
}
