import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { getDatabase } from'../database/database';
import { userData } from'../userID';

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
      isHeartIconSelected: false,
      data: {
        author: 'default',
        contentFront: '',
        contentBack: ',',
        comments: [],
      },
    };
    this.musicIconSelect = this.musicIconSelect.bind(this);
    this.heartIconSelect = this.heartIconSelect.bind(this);
  }
  musicIconSelect() {
    this.setState({
      isMusicIconSelected: !this.state.isMusicIconSelected,
    });
  }
  heartIconSelect() {
    const isHeartIconSelected = this.state.isHeartIconSelected;
    return new Promise((resolve) => {
      const nextStatus = !isHeartIconSelected;
      this.setState({
        isHeartIconSelected: nextStatus,
      });
      return resolve(nextStatus);
    })
    .then((status) => {
      const query = {};
      if (status) {
        query[userData.userID] = userData.userID;
      } else {
        query[userData.userID] = null;
      }
      return query;
    })
    .then(query => getDatabase().ref('posts').child(this.props.data.postID).child('likes').update(query));
  }
  componentDidMount() {
    getDatabase().ref('posts').child(this.props.data.postID).on('value', snap => {
      const contents = snap.val();
      const dataObject = {
        userName: contents.authorname,
        timestamp: contents.timestamp,
        updateDate: contents.updatedat,
      };
      dataObject.likes = contents.likes ? Object.keys(contents.likes).length : 0;
      dataObject.shares = contents.shares ? Object.keys(contents.remembers).length : 0;
      const comments = [];
      if (contents.comments !== undefined) {
        for (let key in contents.comments) {
          const commentData = {
            artist: contents.comments[key].artist.name,
            title: contents.comments[key].title,
          };
          comments.push(commentData);
        }
      }
      dataObject.comments = comments;

      if (!contents.content.includes(' ')) {
        dataObject.contentFront = contents.content;
        dataObject.contentBack = '';
      } else {
        const contentArray = contents.content.split(' ');
        dataObject.contentFront = ` ${contentArray.slice(0, 2).join(' ')}`;
        dataObject.contentBack = ` ${contentArray.slice(2).join(' ')} `;
      }

    //  dataObject.image = contents.image ? `data:image/jpeg;base64, ${contents.image}` : '';
      console.log(dataObject);
      this.setState({
        data: dataObject,
      })
    });
    getDatabase().ref('posts').child(this.props.data.postID).child('likes')
    .once('value', (snap) => {
      snap.forEach((likeData) => {
        if (likeData.val() === userData.userID) {
          this.setState({
            isHeartIconSelected: true,
          })
        }
      })
    });
  }
  render() {
    return (
      <View style={styles.FeedBox}>
        <FeedBoxHeader userName={this.state.data.userName} timestamp = {this.state.data.timestamp}/>
        <FeedBoxContent image={this.state.image} contentFront={this.state.data.contentFront} contentBack={this.state.data.contentBack} />
        <FeedBoxFunctionBar postID={this.state.data.postID} isHeartIconSelected={this.state.isHeartIconSelected} heartIconSelect = {this.heartIconSelect} musicIconSelect={this.musicIconSelect} isMusicIconSelected={this.state.isMusicIconSelected} likes={this.state.data.likes} shares={this.state.data.shares}/>
        <FeedBoxComment isMusicIconSelected={this.state.isMusicIconSelected} comments={this.state.data.comments }/>
      </View>
    );
  }
}
