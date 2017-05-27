import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import FeedBoxComponent from './FeedBoxComponent';
import { getDatabase } from'../database/database';

export default class FeedBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getDatabase().ref('posts'),
      feedBox: [],
    };
  }
  componentDidMount() {
    const feedBoxArray = [];
    getDatabase().ref('posts').on('value', (snap) => {
      console.log('before snap');
      snap.forEach((child) => {
        const content = child.val();
        feedBoxArray.push({
          author: content.author,
          authorName: content.authorname,
          content: content.content,
          timestamp: content.timestamp,
          updateDate: content.updatedat,
        });
      });
      console.log('show feedBoxArray');
      console.dir(feedBoxArray);
      const temp = feedBoxArray.map(post =>
        <FeedBoxComponent data={post} />
      );
      this.setState({
        feedBox: temp.reverse(),
      });
    });
  }

  render() {
    return (
      <ScrollView >
        {this.state.feedBox}
      </ScrollView>
    );
  }
}
