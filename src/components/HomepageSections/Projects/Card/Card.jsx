import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Container } from './Styles';

function Card({ modalData, changeModalData, openModal }) {
  return (
    <Container>
      <Zoom>
        <img src={modalData.image} alt={modalData.alt} />
      </Zoom>
      <div className="imageDesc">
        <h4>{modalData.title}</h4>
        <div className="tectStack">{modalData.techStack}</div>
        <div
          className="learnMoreButton"
          onClick={() => {
            changeModalData();
            openModal();
          }}
        >
          Learn More
        </div>
      </div>
    </Container>
  );
}

export default Card;
