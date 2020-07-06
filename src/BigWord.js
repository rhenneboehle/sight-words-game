import React, { Component } from 'react';

export default class BigWord extends Component {
    render() {
        const bigWordStyle = {
            fontSize: '8vw',
            color: this.props.color,
        };

        return (
            <div>
                <h1 style={bigWordStyle}>{this.props.word}</h1>
            </div>
        );
    }
}
