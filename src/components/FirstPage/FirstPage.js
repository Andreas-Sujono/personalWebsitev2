import React from 'react';
import Particles from 'react-particles-js';
import { Typewriting } from 'react-typewriting';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import SocialMedia from 'components/SocialMedia';
import resumePDF from 'assets/Andreas_Resume.pdf';
import logo from 'assets/Logo.png';
import './style.scss';

const particlesOptions = {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
  onclick: {
    enable: true,
    mode: 'push',
  },
};

const FirstPage = () => {
  return (
    <div id="firstPage">
      <img className="logo" src={logo} alt="andreas Logo" />
      <div className="firstPageContent">
        <div className="title">
          <LightSpeed>
            <h1>
              {' '}
              Hello, I am <span>Andreas Sujono</span>
            </h1>
          </LightSpeed>
          <h2>
            {' '}
            I am I am
            <Typewriting
              strings={[
                ' a Web Developer',
                ' a Full Stack Developer',
                ' a Student at NTU',
                ' a Hard-Working person',
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
          <div className="downloadResume">
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </Fade>
      </div>

      <Particles className="particles" params={particlesOptions} />
    </div>
  );
};

export default FirstPage;
