import React, { Component } from 'react';
import SightWords from './sightWords.js'
import BigWord from './BigWord';

const sightWordArray = BigWord;

export default class App extends Component {



  render() {

    const wordIndex = Math.random();

    return (
      <div>
        <BigWord />
        <span>{sightWordArray}</span>
      </div>
    );
  }
}
