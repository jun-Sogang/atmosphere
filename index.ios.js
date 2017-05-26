import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import App from './app/app';


export default class atmosphere extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" component={App} hideNavBar />
      </Router>
    );
  }
}

AppRegistry.registerComponent('atmosphere', () => atmosphere);
