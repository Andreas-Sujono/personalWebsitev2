import React, { Component } from 'react';
import Modal from 'components/Modal'
import './style.scss'
import Zoom from 'react-reveal/Zoom';

class Card extends Component {

    render() {
        const {image,alt,title,description,techStack,changeModalData,setModal} = this.props
        return (
            <div className="card2">
                <Zoom>
                <img src={image} alt={alt}/>
                </Zoom>
                <div className="imageDesc">
                     <h4>{title}</h4>
                    <div className="tectStack">{techStack}</div>
                    <div className="learnMoreButton" onClick={ ()=> {
                        changeModalData({
                            image:image,
                            title:title,
                            description:description,
                            techStack:techStack
                        });
                        setModal();

                    }}>Learn More</div>
                    
                </div>
                
            </div>
        );
    }
}

export default Card;