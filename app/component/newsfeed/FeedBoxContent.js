import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { getDatabase } from '../database/database';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_container: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 24,
    lineHeight: 18,
    color: 'rgba(0,0,0,0.87)',
  },
  textFront: {
    fontSize: 16,
    fontWeight: '700',

  },
  textBack: {
    fontSize: 14,
    fontWeight: '300',
  },
  quotation: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFD0D0',
  },
});

export default class FeedBoxContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentFront: 'default contentFront',
      contentBack: 'default contentBack',
    };
  }

  componentDidMount() {
    const testUserRef = getDatabase().ref('posts').child('-KjJlGKAD_7Jefm4cqwL');
    const contentRef = testUserRef.child('content');
    contentRef.once('value', (snap) => {
      const content = snap.val();
      const contentArray = content.split(' ');
      const contentFrontState = ` ${contentArray.slice(0, 2).join(' ')}`;
      const contentBackState = ` ${contentArray.slice(2).join(' ')} `;
      this.setState({
        contentFront: contentFrontState,
        contentBack: contentBackState,
      });
    });
    // console.log('did mounted');
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text_container}>
            <Text style={styles.quotation}>{'"'}</Text>
            <Text style={styles.textFront}>{this.state.contentFront}</Text>
            <Text style={styles.textBack}>{this.state.contentBack}</Text>
            <Text style={styles.quotation}>{'"'}</Text>
          </Text>
        </View>
      </View>
    );
  }
}


