import React, { memo, useState } from 'react';
import ProjectModal from 'components/ProjectModal';
import Card from './Card';
import projectsData from './utils';
import { Container } from './Styles';
// import Zoom from 'react-reveal/Zoom';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(true);

  return (
    <Container id="projects">
      <h2>Projects</h2>
      <hr />

      <div className="content projects-row">
        {projectsData.map((item) => (
          <Card
            modalData={item}
            changeModalData={() => setModalData(item)}
            openModal={() => setModalOpen(true)}
            key={item.title}
          />
        ))}
      </div>

      <div className="modalContainer">
        {modalOpen && (
          <ProjectModal
            data={modalData}
            isOpen={modalOpen}
            closeModal={() => setModalOpen(false)}
          />
        )}
      </div>
    </Container>
  );
};

export default memo(Projects);
