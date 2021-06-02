import React, { memo } from 'react';
import { Typewriting } from 'react-typewriting';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import resumePDF from 'assets/Andreas_Resume.pdf';
import logo from 'assets/Logo.png';
import SocialMedia from './SocialMedia';
// import Sphere3D from './Sphere3D';
import ParticlesBg from './ParticlesBg';
import { Container, Content } from './Styles';

const FirstPage = () => {
  return (
    <Container id="firstPage">
      <img className="andreas-logo" src={logo} alt="andreas Logo" />
      <Content>
        <div className="title-container">
          <LightSpeed>
            <h1>
              Hello, I am <span>Andreas Sujono</span>
            </h1>
          </LightSpeed>
          <h2>
            I am
            <Typewriting
              strings={[
                ' a Front end engineer',
                ' a Full stack developer',
                ' a Student at Nanyang Technological University (NTU)',
                ' a Problem solver',
              ]}
              waitBeforeDeleteMs="3000"
            >
              {({ currentText, fullCurrentText }) => (
                <span aria-label={fullCurrentText}>{currentText}</span>
              )}
            </Typewriting>
          </h2>
        </div>
        <SocialMedia />
        <Fade>
          <div className="download-resume">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </Fade>
      </Content>

      <ParticlesBg />
      {/* <Sphere3D /> */}
    </Container>
  );
};

export default memo(FirstPage);
