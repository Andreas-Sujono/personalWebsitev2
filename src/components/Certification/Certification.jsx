import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import data from './utils'

import './style.scss'

function Certification(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 2100 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 2100, min: 1600 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1600, min: 1000 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 1000, min: 0 },
          items: 1
        }
    };
    return (
        <div className="certification-section" id="certificates">
            <h2>Certificates</h2>
            <hr/>
            <Carousel 
                responsive={responsive}
                arrows
                draggable
                infinite
                swipeable
                showDots
            >

                {
                    data.map(image => 
                        <img src={image} alt="certificate" key={Math.random()} className="certificate-image"/>
                    )
                }
            </Carousel>;
        </div>
    );
}

Certification.propTypes = {
    
};

export default Certification;