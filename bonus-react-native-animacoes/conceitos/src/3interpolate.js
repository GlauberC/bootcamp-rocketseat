import React, {Component} from 'react';

import {View, Animated} from 'react-native';

import {Container, Ball} from './styles';

export default class App extends Component {
  state = {
    ballY: new Animated.Value(0),
  };
  componentDidMount() {
    Animated.timing(this.state.ballY, {
      toValue: 300,
      duration: 1000,
    }).start();
  }
  render() {
    return (
      <>
        <Ball
          style={{
            top: this.state.ballY,
            opacity: this.state.ballY.interpolate({
              inputRange: [0, 200, 300],
              outputRange: [1, 1, 0],
            }),
          }}
        />
      </>
    );
  }
}
