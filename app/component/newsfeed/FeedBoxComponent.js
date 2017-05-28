import React, { Component } from 'react';
import {
  StyleSheet,
  View,
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
    console.log('content: ' + this.props.data.content);
    console.log('authorName: ' + this.props.data.authorName);
    return (
      <View style={styles.FeedBox}>
        <FeedBoxHeader userName={this.props.data.authorName} />
        <FeedBoxContent content={this.props.data.content} />
        <FeedBoxFunctionBar likes={this.props.data.likes} shares={this.props.data.shares}/>
        <FeedBoxComment comments={this.props.data.comments }/>
      </View>
    );
  }
}
