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
  render() {
    const elapsed = function (tstamp) {
          var delta_sec = (-tstamp + Date.now()) / 1000;
          if (delta_sec < 60) {
            return 'now';
          } else if (delta_sec < 60 * 60) {
            var min = Math.floor(delta_sec / 60);
            return min + ((min > 1) ? " mins" : " min");
          } else if (delta_sec < 60 * 60 * 24) {
            var hour = Math.floor(delta_sec / 3600);
            return hour + ((hour > 1) ? " hours" : " hour");
          } else {
            if (Math.floor(delta_sec / (3600 * 24)) == 1) {
              return "yesterday";
            }

           var when = new Date(tstamp);
            var year = when.getFullYear();
            var month = when.getMonth() + 1;
            if (month < 10) {
              month = "0" + month;
            }
            var day = when.getDate();
            if (day < 10) {
              day = "0" + day;
            }
            return year + "." + month + "." + day;
          }
        }
    return (
      <View style={styles.Header}>
        <View style={styles.image_container}>
          <Image source={profileImage} style={styles.image} />
        </View>
        <View style={styles.profile_container}>
          <Text style={styles.name}>{this.props.userName}</Text>
          <Text style={styles.time}>{elapsed(this.props.timestamp)}</Text>
        </View>
      </View>
    );
  }
}
