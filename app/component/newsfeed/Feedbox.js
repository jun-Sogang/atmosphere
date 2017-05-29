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
      feedBox: [],
    };
  }
  componentDidMount() {
    const feedBoxArray = [];
    getDatabase().ref('fastPosts').once('value', (snap) => {
      snap.forEach((postData) => {
        const dataObject = {
          postID: postData.key,
        };
        feedBoxArray.push(dataObject);
      });
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
