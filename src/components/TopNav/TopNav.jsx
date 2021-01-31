import React, { useState } from 'react';
import { Link as DiffPageLink } from 'react-router-dom';
import { Link as SamePageLink } from 'react-scroll';
import { GiHamburgerMenu as DropdownIcon } from 'react-icons/gi';

import './style.scss';

const TopNav = () => {
  const [isDropdownExpand, setIsDropdownExpand] = useState(false);
  const navList = [
    { title: 'Home', samePageLink: 'firstPage' },
    { title: 'About', samePageLink: 'about' },
    { title: 'Projects', samePageLink: 'projects' },
    { title: 'Certificates', samePageLink: 'certificates' },
    { title: 'Gallery', samePageLink: 'gallery' },
    { title: 'Contact', samePageLink: 'footer' },
    { title: 'Blog', diffPageLink: '/blog', highlighted: true },
  ];

  return (
    <div className="topNav fluid-container">
      <ul className="inline-ul">
        {navList.map((item) =>
          item.samePageLink ? (
            <li
              className={item.highlighted ? 'highlighted' : ''}
              key={item.samePageLink}
            >
              <SamePageLink
                activeClass="navActive"
                to={item.samePageLink}
                spy
                smooth
                offset={-40}
                duration={500}
              >
                {item.title}
              </SamePageLink>
            </li>
          ) : (
            <li
              key={item.diffPageLink}
              className={item.highlighted ? 'highlighted' : ''}
            >
              <DiffPageLink to={item.diffPageLink}>{item.title}</DiffPageLink>
            </li>
          ),
        )}
      </ul>
      <div className="dropdown-container">
        <DropdownIcon
          className="icon dropdown-icon"
          onClick={() => setIsDropdownExpand(!isDropdownExpand)}
        />
        <ul
          className={`dropdown-content${
            isDropdownExpand ? ' dropdown-expand' : ''
          }`}
        >
          {navList.map((item) =>
            item.samePageLink ? (
              <li
                key={item.samePageLink}
                className={item.highlighted ? 'highlighted' : ''}
              >
                <SamePageLink
                  activeClass="navActive"
                  to={item.samePageLink}
                  spy
                  smooth
                  offset={-40}
                  duration={500}
                >
                  {item.title}
                </SamePageLink>
              </li>
            ) : (
              <li
                key={item.diffPageLink}
                className={item.highlighted ? 'highlighted' : ''}
              >
                <DiffPageLink to={item.diffPageLink}>{item.title}</DiffPageLink>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
