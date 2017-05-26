import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import FeedBoxHeader from './FeedBoxHeader';
import FeedBoxContent from './FeedBoxContent';
import FeedBoxFunctionBar from './FeedBoxFunctionBar';
import FeedBoxComment from './FeedBoxComment';

const styles = StyleSheet.create({
  FeedBox: {
    flex: 1,
  },
});

export default class FeedBox extends Component {
  render() {
    return (
      <ScrollView >
        <View style={styles.FeedBox}>
          <FeedBoxHeader />
          <FeedBoxContent />
          <FeedBoxFunctionBar />
          <FeedBoxComment />
        </View>
        <View style={styles.FeedBox}>
          <FeedBoxHeader />
          <FeedBoxContent />
          <FeedBoxFunctionBar />
          <FeedBoxComment />
        </View>
        <View style={styles.FeedBox}>
          <FeedBoxHeader />
          <FeedBoxContent />
          <FeedBoxFunctionBar />
          <FeedBoxComment />
        </View>
        <View style={styles.FeedBox}>
          <FeedBoxHeader />
          <FeedBoxContent />
          <FeedBoxFunctionBar />
          <FeedBoxComment />
        </View>
      </ScrollView>
    );
  }
}

