import React, { Component } from 'react';
import './style.scss'


class Modal extends Component {
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    

    handleClickOutside = (event) => {
        if (this.refs.modal && !this.refs.modal.contains(event.target)) {
            this.props.closeModal()
        }
    }

    render() {
        const {image, title, description,closeModal} = this.props
        return (
            <div className="andreModalContainer">
                <div className="andreModal" ref="modal">
                    
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
            </div>
        );
    }
}

export default Modal;