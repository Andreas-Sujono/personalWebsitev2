import React, { memo, useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { CoolBackground } from './Styles';

const particlesOptions = {
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
};

function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log('particlesLoaded: ', container);
  }, []);
  return (
    <CoolBackground>
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
    </CoolBackground>
  );
}

export default memo(ParticlesBg);
