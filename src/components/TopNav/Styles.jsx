import styled, { css } from 'styled-components';
import media from 'media';

export const Container = styled.div`
  color: white;
  height: 70px;
  width: 100%;
  background-color: rgb(61, 66, 78);
  margin: 0;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 10;

  .dropdown-container {
    display: none;
    position: relative;

    .dropdown-icon {
      cursor: pointer;
      position: absolute;
      right: 24px;
      top: 24px;
      width: 24px;
      height: 24px;
    }
  }

  ${media.lessThan('md')`
  .dropdown-container {
    height: 70px;
    >ul.inline-ul{display: none;}
    ul li{margin-right: 0;}
    display: block;
  }
  `}
`;

export const InlineNav = styled.ul`
  padding: 0;
  padding-top: 20px;
  position: absolute;
  left: 50% !important;
  transform: translate(-50%, 0) !important;
`;

export const ListItem = styled.li`
  list-style-type: none;
  display: inline;
  margin-right: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;

  .navActive {
    color: rgb(227, 27, 109) !important;
    font-weight: 500;
    font-weight: bold;
  }

  a {
    color: white;
    cursor: pointer;
  }
  a:hover {
    text-decoration: none;
  }

  ${(props) =>
    props.highlighted &&
    css`
      a {
        font-weight: bold;
        color: #05a1a7;
        font-size: 1.2em;
      }

      a::after {
        content: 'New';
        color: yellow;
        font-size: 0.5em;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        position: relative;
        top: -12px;
        left: 2px;
      }
    `}
`;

export const DropdownNav = styled.ul`
  background-color: rgb(61, 66, 78);
  width: 100%;
  height: ${(props) => (props.isDropdownExpand ? '320px' : 0)};
  list-style-type: none;
  padding: 0;
  padding-top: 60px;
  overflow: hidden;
  display: block;
  transition: height 0.25s ease-in-out;

  > li {
    text-align: center;
    cursor: pointer;
    padding: 6px;
    display: block;

    &:hover {
      background-color: rgb(92, 97, 109);
    }
  }
`;
