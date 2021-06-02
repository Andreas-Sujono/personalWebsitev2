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
      {/* <h2>Featured Projects</h2>
      <hr />

      <Card
        modalData={{
          image:
            'https://res.cloudinary.com/dx6juznlw/image/upload/v1622657672/vegan-recipe-app/andreas-website/projects/breadcrumbs_g7vrfp.png',
          alt: 'Breadcrumbs',
          title: 'Breadcrumbs',
          techStack: '',
          description: ['Breadcrumbs'],
          otherImage: [],
        }}
        changeModalData={() => null}
        openModal={() => null}
      />

      <Card
        modalData={{
          image:
            'https://res.cloudinary.com/dx6juznlw/image/upload/v1622657672/vegan-recipe-app/andreas-website/projects/codeMaster_z4root.png',
          alt: 'CodeMaster',
          title: 'CodeMaster',
          techStack: '',
          description: ['CodeMaster'],
          otherImage: [],
        }}
        changeModalData={() => null}
        openModal={() => null}
      /> */}

      <h2>Mini Projects</h2>
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
