import React, { useState, memo } from 'react';
import { Link as DiffPageLink, withRouter, matchPath } from 'react-router-dom';
import { Link as SamePageLink } from 'react-scroll';
import { HamburgerIcon } from 'components/shared/Icons';
import './style.scss';

const TopNav = (props) => {
  const [isDropdownExpand, setIsDropdownExpand] = useState(false);
  const navList = [
    { title: 'Home', samePageLink: true, path: '/', id: 'firstPage' },
    { title: 'About', samePageLink: true, path: '/', id: 'about' },
    { title: 'Projects', samePageLink: true, path: '/', id: 'projects' },
    {
      title: 'Certificates',
      samePageLink: true,
      path: '/',
      id: 'certificates',
    },
    // { title: 'Gallery', samePageLink: true, path: '/', id: 'gallery' },
    { title: 'Contact', samePageLink: true, path: '/', id: 'footer' },
    { title: 'Blog', diffPageLink: true, highlighted: true, path: '/blog' },
  ];

  const isInSamePage = (path) => {
    return matchPath(path, { path: props.location.pathname, exact: true });
  };

  return (
    <div className="topNav fluid-container">
      <ul className="inline-ul">
        {navList.map((item) =>
          item.samePageLink && isInSamePage(item.path) ? (
            <li
              className={item.highlighted ? 'highlighted' : ''}
              key={item.title}
            >
              <SamePageLink
                activeClass="navActive"
                to={item.id}
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
              key={item.title}
              className={item.highlighted ? 'highlighted' : ''}
            >
              <DiffPageLink to={item.path}>{item.title}</DiffPageLink>
            </li>
          ),
        )}
      </ul>
      <div className="dropdown-container">
        <HamburgerIcon
          className="icon dropdown-icon"
          onClick={() => setIsDropdownExpand(!isDropdownExpand)}
        />
        <ul
          className={`dropdown-content${
            isDropdownExpand ? ' dropdown-expand' : ''
          }`}
        >
          {navList.map((item) =>
            item.samePageLink && isInSamePage(item.path) ? (
              <li
                key={item.title}
                className={item.highlighted ? 'highlighted' : ''}
              >
                <SamePageLink
                  activeClass="navActive"
                  to={item.id}
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
                key={item.title}
                className={item.highlighted ? 'highlighted' : ''}
              >
                <DiffPageLink to={item.path}>{item.title}</DiffPageLink>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
};

export default memo(withRouter(TopNav));
