import React, { Component } from 'react'

const optionStyle = {
  cursor: 'pointer',
}

export default class Option extends Component {

  constructor() {
    super();

    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
    console.log(this.props.correct);
  }

  render() {
    return(
      <svg width="50" height="50" style={optionStyle} onClick={this.handleClick}>
        <circle cx="25" cy="25" r="20" fill={(this.state.clicked ? 'red' : 'transparent')} stroke="black" strokeWidth="2" />
      </svg>
    );
  }

}
