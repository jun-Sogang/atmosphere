import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
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

const heartImage = require('./../../img/icon/icon-heart.png');
const heartImageFill = require('./../../img/icon/icon-heart-fill.png')
const musicImage = require('./../../img/icon/icon-music.png');
const musicImageFill = require('./../../img/icon/icon-music-fill.png')
const diskImage = require('./../../img/icon/icon-disk.png');


export default class FeedBoxFunctionBar extends Component {
  render() {
    return (
      <View style={styles.FunctionBar}>
        <View style={styles.bar_icon}>
          <View style={styles.container_left}>
            <TouchableOpacity onPress={this.props.heartIconSelect}>
              <View style={styles.btn_container}>
                <Image source={this.props.isHeartIconSelected ? heartImageFill : heartImage} style={styles.btn} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.musicIconSelect}>
              <View style={styles.btn_container}  >
                <Image source={this.props.isMusicIconSelected ? musicImageFill : musicImage} style={styles.btn} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container_right}>
            <View style={styles.btn_container}>
              <Image source={diskImage} style={styles.btn} />
            </View>
          </View>
        </View>
        <View style={styles.bar_text}>
          <Text style={styles.likes}> {this.props.likes} likes</Text>
          <Text style={styles.shared}> {this.props.shares} shared</Text>
        </View>
      </View>
    );
  }
}
