/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import andreasPhoto from 'assets/Andreas.jpg';
import { Container, Row, SkillBar, SkillImagesContainer } from './Styles';
import { skills, skillImages } from './utils';

function About() {
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
              Andreas is a passionate and tech enthusiast with 4 years of
              working experience in 7 different companies with diverse
              industries such as robotics, ed-tech, gaming, blockchain, data,
              and cybersecurity company. He is well known for his website
              development skills in both frontend and backend sides which follow
              the best practice and clean architecture.
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
}

export default About;
