import React from 'react';
import Zoom from 'react-reveal/Zoom';

import './style.scss';

const Card = (props) => {
  const {
    image,
    alt,
    title,
    description,
    techStack,
    link,
    otherImage,
    sourceCode,
    changeModalData,
    setModal,
  } = props;
  return (
    <div className="card2">
      <Zoom>
        <img src={image} alt={alt} />
      </Zoom>
      <div className="imageDesc">
        <h4>{title}</h4>
        <div className="tectStack">{techStack}</div>
        <div
          className="learnMoreButton"
          onClick={() => {
            changeModalData({
              image,
              alt,
              title,
              description,
              techStack,
              link,
              otherImage,
              sourceCode,
            });
            setModal();
          }}
        >
          Learn More
        </div>
      </div>
    </div>
  );
};

export default Card;
