import React, { memo } from 'react';
import Particles from 'react-particles-js';
import { CoolBackground } from './Styles';

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

const ParticlesBg = () => {
  return (
    <CoolBackground>
      <Particles params={particlesOptions} />
    </CoolBackground>
  );
};

export default memo(ParticlesBg);
