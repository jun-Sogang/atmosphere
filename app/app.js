import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import alarm from './component/alarm/Alarm';
import post from './component/post/Post';
import search from './component/search/Search';
import profile from './component/profile/Profile';
import Newsfeed from './component/newsfeed/NewsFeed';

const styles = StyleSheet.create({
  btn_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  btn: {
    width: 20,
    height: 20,
  },
});

const iconHomeFill = require('./img/icon/icon-home-fill.png');
const iconHome = require('./img/icon/icon-home.png');
const iconAlarmFill = require('./img/icon/icon-alarm-fill.png');
const iconAlarm = require('./img/icon/icon-alarm.png');
const iconWriteFill = require('./img/icon/icon-write-fill.png');
const iconWrite = require('./img/icon/icon-write.png');
const iconSearchFill = require('./img/icon/icon-search-fill.png');
const iconSearch = require('./img/icon/icon-search.png');
const iconProfileFill = require('./img/icon/icon-profile-fill.png');
const iconProfile = require('./img/icon/icon-profile.png');

const homeIcon = ({ selected, title}) =>
(
  <View style={styles.btn_container}>
    <Image source={selected ? iconHomeFill : iconHome} style={styles.btn} />
  </View>
);

const alarmIcon = ({ selected, title}) =>
(
  <View style={styles.btn_container}>
    <Image source={selected ? iconAlarmFill : iconAlarm} style={styles.btn} />
  </View>
);
const writeIcon = ({ selected, title}) =>
(
  <View style={styles.btn_container}>
    <Image source={selected ? iconWriteFill : iconWrite} style={styles.btn} />
  </View>
);

const searchIcon = ({ selected, title}) =>
(
  <View style={styles.btn_container}>
    <Image source={selected ? iconSearchFill : iconSearch} style={styles.btn} />
  </View>
);

const profileIcon = ({ selected, title}) =>
(
  <View style={styles.btn_container}>
    <Image source={selected ? iconProfileFill : iconProfile} style={styles.btn} />
  </View>
);

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" >
          <Scene key="tabbar" tabs hideNavBar tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
            <Scene key="homeTab" title="Home" icon={homeIcon}>
              <Scene key="newsfeed" title="Newsfeed" hideNavBar component={Newsfeed} initial />
            </Scene>
            <Scene key="alarmTab" title="AlarmTab" icon={alarmIcon}>
              <Scene key="alarm" title="Alarm" hideNavBar component={alarm} />
            </Scene>
            <Scene key="postTab" title="PostTab" icon={writeIcon}>
              <Scene key="post" title="Post" component={post} />
            </Scene>
            <Scene key="searchTab" title="SearchTab" icon={searchIcon}>
              <Scene key="search" title="Search" component={search} />
            </Scene>
            <Scene key="profileTab" title="ProfileTab" icon={profileIcon}>
              <Scene key="profile" title="Profile" component={profile} />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
