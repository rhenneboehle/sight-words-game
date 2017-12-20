import React, { Component } from 'react';
import BigWord from './BigWord';
import Option from './Option';

const sightWordArray = require('./sightWords.js');
const colorsArray = require('./colors.js')
const containerStyle = {
  overflow: 'hidden',
}
const wordStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}
const optionsStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, 100%)',
}

export default class App extends Component {

  render() {

    const wordIndex = Math.floor(Math.random() * sightWordArray.length);
    const colorIndex = Math.floor(Math.random() * colorsArray.length);
    const whichOpt = Math.floor(Math.random() * 3);

    return (
      <div style={containerStyle}>
        <div style={wordStyle}>
          <BigWord word={sightWordArray[wordIndex]} color={colorsArray[colorIndex]} />
        </div>
        <div style={optionsStyle}>
          <Option correct={(whichOpt === 0 ? true : false)} />
          <Option correct={(whichOpt === 1 ? true : false)} />
          <Option correct={(whichOpt === 2 ? true : false)} />
        </div>
      </div>
    );
  }
}
