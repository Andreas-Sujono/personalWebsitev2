import React from 'react';
import socialMediaData from './utils';
import { SocialContainer } from './Styles';

function SocialMedia() {
  return (
    <SocialContainer>
      {socialMediaData.map((item) => (
        <a
          href={item.link}
          key={item.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="socialMedia-icon">
            <item.Icon />
          </div>
        </a>
      ))}
    </SocialContainer>
  );
}

export default SocialMedia;
