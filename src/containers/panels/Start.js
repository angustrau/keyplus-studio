/*
    Start

    Displays the loading screen and start screen
*/
import React, { Component } from 'react';

import LargeTransparentButton from 'components/LargeTransparentButton';
import './Start.css';

class Start extends Component {
    render() {
        return (
            <div className='start-root'>
                <div className='start-background' />
                <div className='start-message'>
                    Let's begin!
                </div>
                <div className='start-selections'>
                    <LargeTransparentButton text='Load a Keyplus Studio config' />
                    <LargeTransparentButton text='Load from connected keyboard' />
                    <LargeTransparentButton text='Load Keyboard Layout Editor data' />
                </div>
            </div>
        );
    }
}

export default Start;