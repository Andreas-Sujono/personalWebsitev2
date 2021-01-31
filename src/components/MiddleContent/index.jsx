import React from 'react';
import './style.scss';

const middleContent = () => {
  return (
    <div className="middleContent">
      <div className="text">
        Check more projects in my github&nbsp;
        <a
          style={{ color: 'skyblue' }}
          href="https://github.com/Andreas-Sujono"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>
      </div>
    </div>
  );
};

export default middleContent;
