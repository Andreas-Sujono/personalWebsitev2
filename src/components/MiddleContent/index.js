import React, { Component } from 'react';
import './style.scss'

class middleContent extends Component {
    render() {
        return (
            <div className="middleContent">
                <div className="text">
                    Check more projects in my github <a style={{color:'skyblue'}} href="https://github.com/Andreas-Sujono" target="_blank" rel="noopener noreferrer"> Here </a>
                </div>
            </div>
        );
    }
}

export default middleContent;