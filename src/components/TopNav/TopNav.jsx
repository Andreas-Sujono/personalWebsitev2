import React from 'react';
import { Link } from 'react-scroll';

import './style.scss';

const TopNav = () => {
  const navList = [
    { title: 'Home', link: 'firstPage' },
    { title: 'About', link: 'about' },
    { title: 'Projects', link: 'projects' },
    { title: 'Certificates', link: 'certificates' },
    { title: 'Gallery', link: 'gallery' },
    { title: 'Contact', link: 'footer' },
  ];

  return (
    <div className="topNav fluid-container">
      <ul>
        {navList.map((item) => (
          <li className="collapseIndividual" key={Math.random()}>
            <Link
              activeClass="navActive"
              to={item.link}
              spy
              smooth
              offset={-40}
              duration={500}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopNav;
