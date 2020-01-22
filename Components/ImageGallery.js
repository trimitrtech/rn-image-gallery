import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    PanResponder,
    Animated,
    ImageBackground,
    TimerMixin
} from 'react-native';
import PropTypes from "prop-types";

const DEFAULT_ACTIVE_PILL_COLOR = '#ccc';
const DEFAULT_INACTIVE_PILL_COLOR = '#000';

export default class ImageGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageList: this.props.imageList,
            onBanner: 0,
            startX: 0,
            startY: 0,
            endX: 0,
            endY: 0,
            fadeIn: new Animated.Value(1),
            bannerImageLoading: true,
            activePill: this.props.activePill != undefined ? this.props.activePill : DEFAULT_ACTIVE_PILL_COLOR,
            inactivePill: this.props.inactivePill != undefined ? this.props.inactivePill : DEFAULT_INACTIVE_PILL_COLOR,
            thumbnailGallery: this.props.thumbnailGallery != undefined ? this.props.thumbnailGallery : true,
            loadingScreen: this.props.loadingScreen != undefined ? this.props.loadingScreen : require('./assets/loading.jpg'),
            slideShow: this.props.slideShow != undefined ? this.props.slideShow : false,
            slideInterval: this.props.slideInterval != undefined ? this.props.slideInterval : 2500,
            slideShowIntervalId: 0
        }

        this.__panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderStart: (event, gestureState) => {
                this.setState({
                    startX: gestureState.x0,
                    startY: gestureState.y0
                })
            },
            onPanResponderEnd: (event, gestureState) => {
                this.setState({
                    endX: gestureState.moveX,
                    endY: gestureState.moveY
                })
                if (this.state.startX < this.state.endX && gestureState.dx != 0) {
                    this.onRightSwipe()
                }
                else if (this.state.startX > this.state.endX && gestureState.dx != 0) {
                    this.onLeftSwipe()
                }
            }
        });
    }

    componentDidMount() {
        if (this.state.slideShow) {
            this.onSlideShowStart();
        }
    }
    componentWillUnmount() {
        clearInterval(this.state.slideShowIntervalId);
    }

    onSlideShowStart = () => {
        const slideShowIntervalId = setInterval(() => {
            if (this.state.onBanner == this.state.imageList.length - 1) {
                this.fadeOut(0);
            }
            else {
                this.fadeOut(this.state.onBanner + 1);
            }

        }, this.state.slideInterval);
        this.setState({ slideShowIntervalId: slideShowIntervalId });
    }

    onRenderImageGallary = (imageData) => {
        return (
            <TouchableOpacity onPress={() => { this.setState({ onBanner: imageData.index }) }}>
                <Image style={styles.thumbnailImage} source={{ uri: imageData.item.thumbnail }} />
            </TouchableOpacity>
        )
    }

    fadeOut = (banner) => {
        Animated.timing(this.state.fadeIn, {
            toValue: 0,
            duration: 150
        }).start(() => {
            this.setState({ onBanner: banner })
            this.showBack();
        });
    }
    onDisplayDots = () => {
        return (
            <View style={styles.pillContainer}>
                {
                    this.state.imageList.map((val, index) => {
                        if (this.state.onBanner == index) {
                            return <View key={index} style={[styles.activePill, { backgroundColor: this.state.activePill }]}></View>
                        }
                        else {
                            return <View key={index} style={[styles.inactivePill, { backgroundColor: this.state.inactivePill }]}></View>
                        }
                    })
                }
            </View>
        )
    }

    onRightSwipe = () => {
        if (this.state.onBanner == 0) {
            return;
        }
        else {
            this.fadeOut(this.state.onBanner - 1);
        }
    }

    showBack = () => {
        Animated.timing(this.state.fadeIn, {
            toValue: 1,
            duration: 50
        }).start()
    }
    onLeftSwipe = () => {
        if (this.state.onBanner == this.state.imageList.length - 1) {
            return;
        }
        else {
            this.fadeOut(this.state.onBanner + 1);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.preloadImage}
                    source={this.state.loadingScreen}>
                    <Animated.Image
                        {...this.__panResponder.panHandlers}
                        style={[styles.bannerImage, { opacity: this.state.fadeIn }]}
                        source={{ uri: this.state.imageList[this.state.onBanner].url }}
                    />
                </ImageBackground>
                {this.onDisplayDots()}
                {
                    this.state.thumbnailGallery
                        ?
                        <FlatList
                            data={this.state.imageList}
                            renderItem={this.onRenderImageGallary}
                            scrollEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            keyExtractor={(item, index) => index.toString()}
                            style={styles.flatList}
                        />
                        :
                        null
                }
            </View>
        )
    }
}

ImageGallery.propTypes = {
    imageList: PropTypes.arrayOf(Object).isRequired,
    activePillColor: PropTypes.string,
    inactivePill: PropTypes.string,
    thumbnailGallery: PropTypes.bool,
    loadingScreen: PropTypes.string,
    slideShow: PropTypes.bool,
    slideInterval: PropTypes.number
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    inactivePill: {
        marginRight: 5,
        height: 10,
        width: 10,
        borderRadius: 10,
    },
    activePill: {
        marginRight: 5,
        height: 10,
        width: 10,
        borderRadius: 10,
    },
    pillContainer: {
        flexDirection: 'row'
    },
    thumbnailImage: {
        height: 100,
        width: 100,
        marginTop: 10,
        marginLeft: 10
    },
    bannerImage: {
        height: 300,
        width: 300
    },
    flatList: {
        marginVertical: 10
    },
    preloadImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10
    }
});
