import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import { getDatabase } from '../database/database';


const styles = StyleSheet.create({
  Header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
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
  image_container: {
    width: 64,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  profile_container: {
    flex: 1,
    height: '100%',
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.87)',
    marginTop: 12,
  },
  time: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.54)',
  },
});

const profileImage = require('./../../img/profile.jpg');

export default class FeedBoxHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName,
      image: '',
    };
  }

  render() {

    return (
      <View style={styles.Header}>
        <View style={styles.image_container}>
          <Image source={profileImage} style={styles.image} />
        </View>
        <View style={styles.profile_container}>
          <Text style={styles.name}>{this.state.userName}</Text>
          <Text style={styles.time}>posted time</Text>
        </View>
      </View>
    );
  }
}
