import React from 'react';
import socialMediaData from './utils.js';
import './style.scss';

const SocialMedia = () => {
  return (
    <div className="socialMedia">
      {socialMediaData.map((item, idx) => (
        <a
          href={item.link}
          key={`${item.title}_${idx}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div dangerouslySetInnerHTML={{ __html: item.htmlEl }} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
