import React, { Component } from 'react';
import Card from './Card'
import './style.scss'
import galleryData from './utils'

class Gallery extends Component {
    render() {
        const column = [1,2,3], length = galleryData.length, columnLength = column.length
        return (
            <div className="gallery" id='gallery'>
                <h2>Gallery</h2>
                <hr/>

                <div className="content galleryRow">
                    {
                        column.map( (item,idx) => (
                            <div className="galleryColumn">
                            {
                                galleryData.slice(parseInt(length/columnLength) * idx,parseInt(length/columnLength) * (idx+1)).map( (item,idx) => (
                                    <Card image={item.image} alt={item.alt} />
                                ))
                            }
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Gallery;