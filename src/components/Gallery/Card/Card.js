import React, { Component } from 'react';
import './style.scss'

class Card extends Component {
    render() {
        const {image,alt,title,description} = this.props
        return (
            <div className="card">
                <img src={image} alt={alt}/>
            </div>
        );
    }
}

export default Card;