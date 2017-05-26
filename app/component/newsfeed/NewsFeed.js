import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import FeedBox from './Feedbox';
import NewsFeedHeader from './NewsFeedHeader';

const styles = StyleSheet.create({
  Newsfeed: {
    flex: 1,
  },
});

export default class NewsFeed extends Component {
  render() {
    return (
      <View style={styles.Newsfeed}>
        <NewsFeedHeader />
        <FeedBox />
      </View>
    );
  }
}

