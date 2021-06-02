import React from 'react';
import './style.scss';
import Fade from 'react-reveal/Fade';

const Card = (props) => {
  const { image, alt } = props;
  return (
    <div className="card">
      <Fade>
        <img src={image} alt={alt} />
      </Fade>
    </div>
  );
};

export default Card;
