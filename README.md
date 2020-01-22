
# RN Image Gallery Documentation

<p float="center">
  <!-- <img src="Android_Demo.jpg" width="180" hspace="20" /> -->
  <img src="Android.gif" width="200" height="250" hspace="30" />
  <img src="IOS.gif" width="200" height="250" />
  <!-- <img src="ios_example.jpg" width="180" />    -->
</p>

<p float="center">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <b>Android</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <b>IOS</b>
</p>


## Installation
 ` npm i rn-image-gallery `

## Import
```js
import {
  ImageGallery
} from 'rn-image-gallery'

```

## Quick Example
```jsx
    <ImageGallery
      activePill={"#c40b0a"}
      inactivePill={"#29ABE2"}
      thumbnailGallery={false}
      imageList={imageList}
      slideShow={false}
    />
```

## ImageGallery Properties Detail
Define a `ImageGallery` screen with following properties as such:


| Property        | Type           | Description  |
| ------------- |-------------| -----|
| activePill | String | Defines the color of the dot or pill of the shown image  |
| inactivePill | String | Defines the color of the dot or pill of the hidden/inactive image  |
| thumbnailGallery | Boolean | Defines the thumbnail of the gallery on the bottom |
| imageList | Array | Defines the list of images path which is to be shown in the gallery |
| slideShow | Boolean | Defines whether you automatically want to slideshow the gallery |

## Example :

```jsx
    imageList: [
        { "name": "Nature", "url": "https://images.freeimages.com/images/large-previews/af4/french-desert-6-1400167.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/af4/french-desert-6-1400167.jpg"},
        { "name": "Nature1", "url": "https://images.freeimages.com/images/large-previews/867/volcanic-mt-ngauruhoe-1378772.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/867/volcanic-mt-ngauruhoe-1378772.jpg"},
        { "name": "Nature2", "url": "https://images.freeimages.com/images/large-previews/e2a/boise-downtown-1387405.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/e2a/boise-downtown-1387405.jpg"},
        { "name": "Nature3", "url": "https://images.freeimages.com/images/large-previews/8a1/small-waterfall-1376352.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/8a1/small-waterfall-1376352.jpg"},
        { "name": "Nature4", "url": "https://images.freeimages.com/images/large-previews/199/sunflowers-6-1392951.jpg", "thumbnail": "https://images.freeimages.com/images/small-previews/199/sunflowers-6-1392951.jpg"}
      ]
```
```jsx
    <ImageGallery
      activePill={"#c40b0a"}
      inactivePill={"#29ABE2"}
      thumbnailGallery={false}
      imageList={imageList}
      slideShow={false}
    />
```

