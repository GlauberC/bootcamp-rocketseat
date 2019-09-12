import React, {Component} from 'react';

import {View, Animated} from 'react-native';

import {Container, Ball} from './styles';

const ballY = new Animated.Value(0);
const ballX = Animated.divide(ballY, 2);

export default class App extends Component {
  state = {
    // ballY: new Animated.Value(0),
    ballY,
    ballX,
  };
  componentDidMount() {
    // Animated.timing(this.state.ballY, {
    //   toValue: 500,
    //   duration: 1000,
    // }).start();

    // Animated.spring(this.state.ballY, {
    //   toValue: 300,
    //   bounciness: 50,
    // }).start();

    // Animated.decay(this.state.ballY, {
    //   velocity: 1,
    // }).start();

    Animated.decay(this.state.ballY, {
      velocity: 1,
    }).start();
  }
  render() {
    return (
      <>
        <Ball style={{top: this.state.ballY, left: this.state.ballX}} />
      </>
    );
  }
}
