/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import andreasPhoto from 'assets/Andreas.jpg';
import { Container, Row, SkillBar, SkillImagesContainer } from './Styles';
import { skills, skillImages } from './utils';

const About = () => {
  return (
    <Container id="about">
      <Flip top>
        <h2>About</h2>
        <hr />
      </Flip>

      <Row className="row">
        <div className="left-content col-lg-5 col- 10">
          <Zoom>
            <img src={andreasPhoto} alt="andreas" />
          </Zoom>
          <LightSpeed>
            <h4>About Me</h4>
          </LightSpeed>
          <Fade>
            <div className="about-me-content">
              A sophomore in NTU studying Electrical and Electronic Engineering.
              Have a really great passion for developing innovative programs.
              Experienced in well-versed technology and writing code that are
              reliable and user-friendly. Have developed several web-based
              applications using Python with Django framework and built the
              front end using ReactJs to make a responsive single page
              application.
            </div>
          </Fade>
        </div>
        <div className="right-content col-lg-7 col-10">
          <Fade left>
            <h4>Skills</h4>
            {skills.map((item) => (
              <SkillBar key={item.name}>
                <div className="skill-title">{item.name}</div>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-animated"
                    style={{
                      width: `${item.value}% `,
                    }}
                    role="progressbar"
                    aria-valuenow={item.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
                <div className="skill-proficiency">{item.proficiency}</div>
              </SkillBar>
            ))}
          </Fade>
        </div>
      </Row>

      <SkillImagesContainer className="row">
        {skillImages.map((item, idx) => (
          <div
            className="skill-image-individual col"
            key={`${item.name}_${idx}`}
          >
            <Zoom>
              <img src={item.image} alt="skill" />
              <h4>{item.title}</h4>
              <div>{item.detail}</div>
            </Zoom>
          </div>
        ))}
      </SkillImagesContainer>
    </Container>
  );
};

export default About;
