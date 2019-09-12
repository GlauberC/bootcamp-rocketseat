import React, {Component} from 'react';

import {View, Animated, PanResponder} from 'react-native';

import {Container, Ball} from './styles';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ballPos: new Animated.ValueXY({x: 0, y: 0}),
    };
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.ballPos.setOffset({
          x: this.state.ballPos.x._value,
          y: this.state.ballPos.y._value,
        });
        this.state.ballPos.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.ballPos.x,
          dy: this.state.ballPos.y,
        },
      ]),
      onPanResponderRelease: () => {
        this.state.ballPos.flattenOffset();
      },
    });
  }
  state = {};
  componentDidMount() {}
  render() {
    return (
      <>
        <Ball
          {...this._panResponder.panHandlers}
          style={{
            transform: [
              {translateX: this.state.ballPos.x},
              {translateY: this.state.ballPos.y},
            ],
          }}
        />
      </>
    );
  }
}
