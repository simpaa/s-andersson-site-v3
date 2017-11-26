import React, { Component } from 'react';
import Typed from 'typed.js';

import './style.css';

class Cover extends Component {

    componentDidMount() {
        const options = {
            strings: this.props.strings,
            typeSpeed: 40,
            backSpeed: 20,
            loop: true
        };

        this.typed = new Typed(this.element, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        const backgroundImageStyle = {
            backgroundImage: `url(${this.props.imageUrl})`
        }
        return (
            <div className="cover" style={backgroundImageStyle}>
                <div className="cover-content">
                    <div className="presentation">
                        <span ref={(element) => { this.element = element }}></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cover;
