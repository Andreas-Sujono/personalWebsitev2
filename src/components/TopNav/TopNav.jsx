import React, { useState, memo, useCallback } from 'react';
import { Link as DiffPageLink, matchPath, useLocation } from 'react-router-dom';
import { Link as SamePageLink } from 'react-scroll';
import { HamburgerIcon } from 'react-dre/lib/Icon';
import { Container, InlineNav, ListItem, DropdownNav } from './Styles';

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

function TopNav() {
  const [isDropdownExpand, setIsDropdownExpand] = useState(false);
  const location = useLocation();

  const isInSamePage = useCallback(
    (path) => {
      return matchPath({ path }, location.pathname);
    },
    [location.pathname],
  );

  const renderListItem = useCallback(
    () =>
      navList.map((item) =>
        item.samePageLink && isInSamePage(item.path) ? (
          <ListItem highlighted={item.highlighted} key={item.title}>
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
          </ListItem>
        ) : (
          <ListItem key={item.title} highlighted={item.highlighted}>
            <DiffPageLink to={item.path}>{item.title}</DiffPageLink>
          </ListItem>
        ),
      ),
    [isInSamePage],
  );

  return (
    <Container className="topNav fluid-container">
      {window.innerWidth > 768 && (
        <InlineNav classNane="inline-ul">{renderListItem()}</InlineNav>
      )}

      <div className="dropdown-container">
        <HamburgerIcon
          className="icon dropdown-icon"
          onClick={() => setIsDropdownExpand(!isDropdownExpand)}
        />
        <DropdownNav isDropdownExpand={isDropdownExpand}>
          {renderListItem()}
        </DropdownNav>
      </div>
    </Container>
  );
}

export default memo(TopNav);
