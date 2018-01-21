/*
    Large Transparent Button

    Places a big button with no background and rounded white corners
*/
import React, { Component } from 'react';
import './LargeTransparentButton.css';

class LargeTransparentButton extends Component {
    render() {
        const { onClick, text } = this.props;

        return (
            <button onClick={ onClick } className='largetransparentbutton'>
                { text }
            </button>
        );
    }
}

export default LargeTransparentButton;