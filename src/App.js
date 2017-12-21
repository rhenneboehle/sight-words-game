import React, { Component } from 'react';
import './fonts.css';
import BigWord from './BigWord';
import Howler from 'react-howler';

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
  transform: 'translate(-50%, 120%)',
}
const radioStyle = {
  width: 50,
  height: 50,
}

export default class App extends Component {

  constructor() {
    super();
    const whichOpt = Math.floor(Math.random() * 3);

    this.state={
      whichOpt: whichOpt,
    };
  }

  render() {

    const wordIndex = Math.floor(Math.random() * sightWordArray.length);
    const colorIndex = Math.floor(Math.random() * colorsArray.length);
    const whichOpt = this.state.whichOpt;
    const whichClicked = this.state.whichClicked;

    return (
      <div style={containerStyle}>
        <div style={wordStyle}>
          <BigWord word={sightWordArray[wordIndex]} color={colorsArray[colorIndex]} />
        </div>
        <div style={optionsStyle}>
          <input style={radioStyle} type="radio" name="opt" value="opt0" />
          <input style={radioStyle} type="radio" name="opt" value="opt1" />
          <input style={radioStyle} type="radio" name="opt" value="opt2" />
        </div>
        <div style={optionsStyle}>
          <input type="button" value="Yes!" />
        </div>
      </div>
    );
  }
}
