import React, { memo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Modal, CloseButton } from 'react-dre/lib/Modal';
import { ModalContent, Description } from './Styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectModal = ({ isOpen, closeModal, data }) => {
  const {
    image,
    alt,
    otherImage,
    title,
    techStack,
    description,
    sourceCode,
    link,
  } = data;
  return (
    <Modal
      isOpen={isOpen}
      handleClose={() => closeModal()}
      shouldCloseOnOverlayClick
      styles={{
        overlayStyle: {
          zIndex: 20,
          background: 'rgba(255,255,255, 0.5)',
        },
        contentStyle: {
          padding: 0,
        },
      }}
    >
      <ModalContent>
        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        />

        <Carousel>
          <div>
            <img src={image} alt={alt} />
          </div>
          {otherImage.map((item) => (
            <div key={`${item}`}>
              test
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </Carousel>

        <h2>{title}</h2>
        <hr />
        <Description>
          <div className="techStack">{techStack}</div>
          {description.map((item) => (
            <p key={item}> {item}</p>
          ))}

          <hr />

          {sourceCode && (
            <p>
              See Source code&nbsp;
              <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                Here
              </a>
            </p>
          )}

          <hr />

          {link && (
            <p>
              check demo at:&nbsp;
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </p>
          )}
        </Description>
      </ModalContent>
    </Modal>
  );
};

export default memo(ProjectModal);
