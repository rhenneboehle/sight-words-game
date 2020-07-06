import React, { Component } from 'react';
import ReactHowler from 'react-howler';

export default class AudioPlayer extends Component {
    render() {
        return <ReactHowler src={this.props.audio} playing={true} />;
    }
}
