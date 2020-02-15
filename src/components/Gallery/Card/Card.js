import React, { Component } from 'react';
import './style.scss'
import Fade from 'react-reveal/Fade';

class Card extends Component {
    render() {
        const {image,alt,title,description} = this.props
        return (
            <div className="card">
                <Fade><img src={image} alt={alt}/></Fade>
            </div>
        );
    }
}

export default Card;