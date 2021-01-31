import React, { Component } from 'react';
import ProjectModal from 'components/ProjectModal';
import Card from './Card';
import './style.scss';
import projectsData from './utils';
// import Zoom from 'react-reveal/Zoom';

class Projects extends Component {
  state = {
    modal: false,
    data: null,
  };

  setModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  changeModalData = (data) => {
    this.setState({ data });
  };

  render() {
    return (
      <div className="projects" id="projects">
        <h2>Projects</h2>
        <hr />

        <div className="content projectsRow">
          {projectsData.map((item, idx) => (
            <Card
              image={item.image}
              alt={item.alt}
              title={item.title}
              techStack={item.techStack}
              description={item.description}
              link={item.link ? item.link : null}
              sourceCode={item.sourceCode ? item.sourceCode : null}
              otherImage={item.otherImage}
              changeModalData={this.changeModalData}
              setModal={this.setModal}
              key={`${item.title}_${idx}`}
            />
          ))}
        </div>

        <div className="modalContainer">
          {this.state.modal && (
            <ProjectModal {...this.state.data} closeModal={this.closeModal} />
          )}
        </div>
      </div>
    );
  }
}

export default Projects;
