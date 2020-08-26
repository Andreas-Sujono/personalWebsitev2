import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
        const {image, alt, title, techStack, description, link, sourceCode, otherImage, closeModal} = this.props
        return (
            <div className="andreModalContainer">
                <div className="andreModal" ref="modal">
                    
                    <div className="imageCarousel">
                        <Carousel>
                            <div>
                                <img src={image} alt={alt} />
                            </div>
                            {
                                otherImage.map( (item,idx) => <div key={`${item}_${idx}`}> test<img src={item.image} alt={item.alt} /> </div>)
                            }
                        </Carousel>
                    </div>
                
                    <h2>{title}</h2>
                    <hr/>
                    <div className="description">
                        <div className="techStack">{techStack}</div>
                        {description.map( (item,idx) => <p key={`${item}_${idx}`}> {item}</p>)}
                        <hr/>
                        {sourceCode && <p> See Source code <a href={sourceCode} target="_blank" rel="noopener noreferrer">Here</a> </p>}
                        <hr/>
                        { link && <p>check demo at: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>}
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