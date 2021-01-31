import React from 'react';
import socialMediaData from './utils';
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
          <div className="socialMedia-icon">
            <i className={item.iconName} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
