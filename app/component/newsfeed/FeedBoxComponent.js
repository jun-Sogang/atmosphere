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
    console.log('content in FeedBoxComponent')
    console.log(this.props.data.content)
    return (
      <View style={styles.FeedBox}>
        <FeedBoxHeader />
        <FeedBoxContent content={this.props.data.content} />
        <FeedBoxFunctionBar />
        <FeedBoxComment />
      </View>
    );
  }
}
