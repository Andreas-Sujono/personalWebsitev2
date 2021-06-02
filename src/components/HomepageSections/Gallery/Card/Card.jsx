import React, { memo } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: 0;
  margin-top: 8px;
  transition: all 0.2s;

  img {
    width: 100%;
    height: auto;
    margin: auto;
    display: block;
  }

  &:hover {
    transform: scale(1.08, 1.08);
    z-index: 5;
    box-shadow: 2px 2px 4px #05a1a7, 4px 4px 8px #05a1a7;
  }
`;

const Card = (props) => {
  const { image, alt } = props;
  return (
    <Container className="card">
      <Fade>
        <img src={image} alt={alt} />
      </Fade>
    </Container>
  );
};

export default memo(Card);
