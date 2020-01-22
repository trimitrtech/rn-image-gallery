import React, { Component } from 'react';
import {
    PanResponder
} from 'react-native';

export default class UserSwipeResponder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0,
            onLeftSwipe: this.props.onLeftSwipe,
            onRightSwipe: this.props.onRightSwipe
        };
        this.__panResponder = PanResponder.create({
            onPanResponderStart: (event, gestureState) => {
                console.log(gestureState)
                this.setState({
                    startX: gestureState.x0,
                    startY: gestureState.y0
                })
            },
            onPanResponderEnd: (event, gestureState) => {
                console.log(gestureState)
                this.setState({
                    endX: gestureState.moveX,
                    endY: gestureState.moveY
                })
            }
        });
    }

    componentDidMount() {
        this.__panResponder.panHandlers.onResponderEnd((event) => {
            if (this.state.endX > this.state.startX) {
                this.state.onRightSwipe();
            }
            else if (this.state.endX < this.state.startX) {
                this.state.onLeftSwipe();
            }
        })
    }

    render() {
        return (
            null
        )
    }
}