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
  componentWillMount() {
    const feedBoxArray = [];
    getDatabase().ref('posts').on('value', (snap) => {
      console.log('before snap');
      snap.forEach((postData) => {
        const content = postData.val();
        const dataObject = {
          author: content.author,
          authorName: content.authorname,
          content: content.content,
          timestamp: content.timestamp,
          updateDate: content.updatedat,
          postID: postData,
        };
        if (content.likes !== undefined) {
          dataObject.likes = Object.keys(content.likes).length;
        } else {
          dataObject.likes = 0;
        }
        if (content.remembers !== undefined) {
          dataObject.shares = Object.keys(content.remembers).length;
        } else {
          dataObject.shares = 0;
        }
        const comments = [];
        if (content.comments !== undefined) {
          for (let key in content.comments) {
            const commentData = {
              artist: content.comments[key].artist.name,
              title: content.comments[key].title,
            };
            comments.push(commentData);
          }
        }
        dataObject.comments = comments;
        console.log(dataObject);
        feedBoxArray.push(dataObject);
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
