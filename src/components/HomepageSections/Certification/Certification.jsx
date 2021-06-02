import React from 'react';
import { Carousel } from '3d-react-carousal';
import data from './utils';
import { Container } from './Styles';

const slides = data.map((item) => (
  <img src={item} alt="" key={Math.random()} className="certificate-image" />
));

function Certification() {
  return (
    <Container id="certificates">
      <h2>Certificates</h2>
      <hr />
      <Carousel slides={slides} autoplay interval={3000} />
    </Container>
  );
}

Certification.propTypes = {};

export default Certification;
