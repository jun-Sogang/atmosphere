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
  constructor(props) {
    super(props);
    this.state = {
      isMusicIconSelected: false,
    };
    this.musicIconSelect = this.musicIconSelect.bind(this);
  }
  musicIconSelect() {
    this.setState({
      isMusicIconSelected: !this.state.isMusicIconSelected,
    });
    console.log('execute musicIconSelect');
    console.log(this.state.isMusicIconSelected)
  }
  render() {
    return (
      <View style={styles.FeedBox}>
        <FeedBoxHeader userName={this.props.data.authorName} />
        <FeedBoxContent content={this.props.data.content} />
        <FeedBoxFunctionBar musicIconSelect={this.musicIconSelect} likes={this.props.data.likes} shares={this.props.data.shares}/>
        <FeedBoxComment isMusicIconSelected={this.state.isMusicIconSelected} comments={this.props.data.comments }/>
      </View>
    );
  }
}
