import React, {Component} from 'react';

import {View, Animated} from 'react-native';

import {Container, Ball} from './styles';

export default class App extends Component {
  state = {
    ballY: new Animated.Value(0),
    ballX: new Animated.Value(0),
  };
  componentDidMount() {
    // Animated.sequence([
    //   Animated.timing(this.state.ballY, {
    //     duration: 500,
    //     toValue: 200,
    //   }),
    //   Animated.delay(1000),
    //   Animated.timing(this.state.ballX, {
    //     duration: 500,
    //     toValue: 200,
    //   }),
    // ]).start();

    // Animated.parallel([
    //   Animated.timing(this.state.ballY, {
    //     duration: 500,
    //     toValue: 200,
    //   }),
    //   Animated.timing(this.state.ballX, {
    //     duration: 500,
    //     toValue: 200,
    //   }),
    // ]).start();

    // Animated.stagger(300, [
    //   Animated.timing(this.state.ballY, {
    //     duration: 500,
    //     toValue: 200,
    //   }),
    //   Animated.timing(this.state.ballX, {
    //     duration: 500,
    //     toValue: 200,
    //   }),
    // ]).start();
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.ballY, {
          duration: 500,
          toValue: 200,
        }),
        Animated.delay(200),
        Animated.timing(this.state.ballX, {
          duration: 500,
          toValue: 200,
        }),
        Animated.delay(200),
        Animated.timing(this.state.ballY, {
          duration: 500,
          toValue: 0,
        }),
        Animated.delay(200),
        Animated.timing(this.state.ballX, {
          duration: 500,
          toValue: 0,
        }),
        Animated.delay(200),
      ]),
      {
        iterations: 3, // Número de vezes que irá fazer o loop
      },
    ).start();
  }
  render() {
    return (
      <>
        <Ball style={{top: this.state.ballY, left: this.state.ballX}} />
      </>
    );
  }
}
