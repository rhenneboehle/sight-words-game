import React, { Component } from 'react';
import './fonts.css';
import BigWord from './BigWord';
import AudioPlayer from './AudioPlayer';

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
  textAlign: 'center',
}
const radioStyle = {
  width: 50,
  height: 50,
  margin: '0 1em',
}
const labelStyle = {
  display: 'block',
  textAlign: 'center',
}
const optionsPairStyle = {
  display: 'inline-block',
}

export default class App extends Component {

  constructor() {
    super();
    const whichOpt = Math.floor(Math.random() * 3);

    this.state={
      whichOpt: whichOpt,
      optClicked: '',
      audioFile: './audio/blank.mp3',
      currentOptions: this.getOptions(),
      currentColor: this.getColor(),
      remediation: false,
    };
  }

  getColor = () => {
    const colorIndex = Math.floor(Math.random() * colorsArray.length);
    return colorIndex;
  }

  getOptions = () => {
    let tempWords = [...sightWordArray];
    let temp, current, top = tempWords.length;

    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      temp = tempWords[current];
      tempWords[current] = tempWords[top];
      tempWords[top] = temp;
    }

    return [tempWords[0], tempWords[1], tempWords[2]];
  }

  radioClicked = (opt) => {
    const clickedOpt = parseInt(opt.target.value.substr(3),0);
    this.setState({
      audioFile: './audio/'+this.state.currentOptions[clickedOpt]+'.mp3',
    })
  }

  buttonClick = () => {
    const opts = [].slice.call(document.getElementsByName('opt'));
    let optsChecked = false;
    let optClicked;
    for (var i = 0; i < opts.length; i++) {
      if(opts[i].checked) {
        optClicked = i;
        optsChecked = true;
        break;
      }
    }
    if(optsChecked) {
      this.setState({
        remediation: true,
        optClicked: optClicked,
      });
    }
  }

  restart = () => {
    const choseRight = (this.state.whichOpt === this.state.optClicked);
    if(choseRight) {
      const whichOpt = Math.floor(Math.random() * 3);
      this.setState({
        remediation: false,
        audioFile: './audio/blank.mp3',
      });

      const opts = [].slice.call(document.getElementsByName('opt'));
      for (var i = 0; i < opts.length; i++) {
        opts[i].checked = false;
      }

      window.setTimeout(() => {
        this.setState({
          whichOpt: whichOpt,
          optClicked: '',
          currentOptions: this.getOptions(),
          currentColor: this.getColor(),
        });
      }, 1000);
    } else {
      this.setState({
        remediation: false,
      });
    }
  }

  render() {
    const buttonStyle = {
      margin: '1em 0 0 0',
      width: 150,
      height: 50,
      cursor: 'pointer',
      background: colorsArray[this.state.currentColor],
      color: 'white',
      fontSize: '16px',
    }
    const resultsStyle = {
      position: 'absolute',
      padding: 0,
      margin: 0,
      top: (this.state.remediation ? 0 : '-100%'),
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgb(240,240,240)',
      zIndex: 1000,
      transition: 'top 1s',
      textAlign: 'center',
    }

    const choseRight = this.state.whichOpt === this.state.optClicked;

    return (
      <div style={containerStyle}>
        <div id="resultsPage" style={resultsStyle}>
          <BigWord word={(choseRight ? "You\'re Right!" : "Whoops, try again!")} color={(choseRight ? 'green' : 'red')} />
          <button onClick={this.restart} style={buttonStyle}>{(choseRight ? 'Play Again' : 'Try Again')}</button>
        </div>
        <div style={wordStyle}>
          <BigWord word={this.state.currentOptions[this.state.whichOpt]} color={colorsArray[this.state.currentColor]} />
        </div>
        <div style={optionsStyle}>
          <div style={optionsPairStyle}>
            <input onChange={this.radioClicked} style={radioStyle} type="radio" id="opt0" name="opt" value="opt0" />
            <label style={labelStyle}>1</label>
          </div>
          <div style={optionsPairStyle}>
            <input onChange={this.radioClicked} style={radioStyle} type="radio" id="opt1" name="opt" value="opt1" />
            <label style={labelStyle}>2</label>
          </div>
          <div style={optionsPairStyle}>
            <input onChange={this.radioClicked} style={radioStyle} type="radio" id="opt2" name="opt" value="opt2" />
            <label style={labelStyle}>3</label>
          </div>
          <br/>
          <button onClick={this.buttonClick} style={buttonStyle}>Choose</button>
        </div>
        <AudioPlayer audio={(this.state.remediation ? './audio/blank.mp3' : this.state.audioFile)} />
      </div>
    );
  }
}
