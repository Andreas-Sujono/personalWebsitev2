import React, { Component } from 'react';
import './style.scss'


class Modal extends Component {
    render() {
        const {image, title, description,closeModal} = this.props
        return (
            <div className="andreModal">
                
                <img src={image}/>
                <h2>{title}</h2>
                <hr/>
                <div className="description">
                    {description}
                </div>
                <div className="closeModal" onClick={()=>closeModal()}>
                    &times;
                </div>
                
            </div>
        );
    }
}

export default Modal;