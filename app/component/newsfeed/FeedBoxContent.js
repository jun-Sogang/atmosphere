import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

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
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text_container}>
            <Text style={styles.quotation}>{'"'}</Text>
            <Text style={styles.textFront}>{this.props.contentFront}</Text>
            <Text style={styles.textBack}>{this.props.contentBack}</Text>
            <Text style={styles.quotation}>{'"'}</Text>
          </Text>
          <Image source={this.props.image} />
        </View>
      </View>
    );
  }
}
