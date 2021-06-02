import React from 'react';
import { Container } from './Styles';

const middleContent = () => {
  return (
    <Container>
      <div className="text">
        Check more projects in my github&nbsp;
        <a
          style={{ color: 'skyblue' }}
          href="https://github.com/Andreas-Sujono"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>
      </div>
    </Container>
  );
};

export default middleContent;
