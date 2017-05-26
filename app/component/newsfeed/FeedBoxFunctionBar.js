import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

const styles = StyleSheet.create({
  FunctionBar: {
    height: 64,
  },
  bar_icon: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
  },
  container_left: {
    flex: 1,
    flexDirection: 'row',
  },
  container_right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn_container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 20,
    height: 20,
  },
  bar_text: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,

  },
  likes: {
    flex: 1,
    fontSize: 12,
  },
  shared: {
    flex: 1,
    textAlign: 'right',
    fontSize: 12,
  },
});

const iconHeader = require('./../../img/icon/icon-heart.png');
const iconMusic = require('./../../img/icon/icon-music.png');
const iconDisk = require('./../../img/icon/icon-disk.png');

export default class FeedBoxFunctionBar extends Component {
  render() {
    return (
      <View style={styles.FunctionBar}>
        <View style={styles.bar_icon}>
          <View style={styles.container_left}>
            <View style={styles.btn_container}>
              <Image source={iconHeader} style={styles.btn} />
            </View>
            <View style={styles.btn_container}>
              <Image source={iconMusic} style={styles.btn} />
            </View>
          </View>
          <View style={styles.container_right}>
            <View style={styles.btn_container}>
              <Image source={iconDisk} style={styles.btn} />
            </View>
          </View>
        </View>
        <View style={styles.bar_text}>
          <Text style={styles.likes}> 3 likes</Text>
          <Text style={styles.shared}> 5 shared</Text>
        </View>
      </View>
    );
  }
}

