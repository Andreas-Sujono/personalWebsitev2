import React from 'react';
import Card from './Card';
import './style.scss';
import galleryData from './utils';

const Gallery = () => {
  const column = [1, 2, 3];
  const { length } = galleryData;
  const columnLength = column.length;
  const galleryChosen = (idx) =>
    galleryData.slice(
      parseInt(length / columnLength) * idx,
      parseInt(length / columnLength) * (idx + 1),
    );

  return (
    <div className="gallery" id="gallery">
      <h2>Gallery</h2>
      <hr />

      <div className="content galleryRow">
        {column.map((_, idx1) => (
          <div className="galleryColumn" key={Math.random()}>
            {galleryChosen(idx1).map((item2) => (
              <Card image={item2.image} alt={item2.alt} key={Math.random()} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
