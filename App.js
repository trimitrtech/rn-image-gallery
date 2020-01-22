/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { ImageGallery } from "rn-image-gallery";

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      imageList: [
                    { "name": "Nature", "url": "https://images.freeimages.com/images/large-previews/af4/french-desert-6-1400167.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/af4/french-desert-6-1400167.jpg"},
                    { "name": "Nature1", "url": "https://images.freeimages.com/images/large-previews/867/volcanic-mt-ngauruhoe-1378772.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/867/volcanic-mt-ngauruhoe-1378772.jpg"},
                    { "name": "Nature2", "url": "https://images.freeimages.com/images/large-previews/e2a/boise-downtown-1387405.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/e2a/boise-downtown-1387405.jpg"},
                    { "name": "Nature3", "url": "https://images.freeimages.com/images/large-previews/8a1/small-waterfall-1376352.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/8a1/small-waterfall-1376352.jpg"},
                    { "name": "Nature4", "url": "https://images.freeimages.com/images/large-previews/199/sunflowers-6-1392951.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/199/sunflowers-6-1392951.jpg"},
                    { "name": "Nature5", "url": "https://images.freeimages.com/images/large-previews/0cf/tulips-1-1377350.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/0cf/tulips-1-1377350.jpg"},
                    { "name": "Nature6", "url": "https://images.freeimages.com/images/large-previews/a61/vikingland-1316664.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/a61/vikingland-1316664.jpg"},
                ]
    }
  }
  
  render(){
    return(
      <ImageGallery
        activePill={"#c40b0a"}
        inactivePill={"#29ABE2"}
        thumbnailGallery={true}
        imageList={this.state.imageList}
        slideShow={true}        
      />
    )
  }
}


const styles = StyleSheet.create({
});
