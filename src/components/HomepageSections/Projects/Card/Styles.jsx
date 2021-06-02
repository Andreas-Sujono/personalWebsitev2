import styled from 'styled-components';
import media from 'media';

export const Container = styled.div`
  background-color: transparent;
  margin: auto;
  padding: 0;
  border: 0;
  position: relative;
  width: 300px;
  margin-top: 24px;
  font-weight: bold;
  transition: all 0.5s;

  img {
    width: 100%;
    height: auto;
    display: block;
    margin: auto;
    background-color: white;
    vertical-align: middle;
  }

  > .imageDesc {
    width: 100%;
    height: 100%;
    opacity: 0.01;
    overflow: hidden;
    position: absolute;
    top: 0;
    background-color: rgba(250, 250, 250, 1);
    color: grey;
    text-align: center;
    padding-top: 50px;
    cursor: pointer;
    transition: all 0.5s;

    .tectStack {
      color: maroon;
    }

    .learnMoreButton {
      cursor: pointer;
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 150px;
      padding-top: 10px;
      height: 50px;
      border: 1px solid rgb(227, 27, 109);
      transition: all 0.5s;
    }
    .learnMoreButton:hover {
      background-color: rgb(227, 27, 109);
      color: white;
    }
  }

  > .imageDesc:hover {
    opacity: 0.9;
  }

  &:hover {
    transform: scale(1.08, 1.08);
  }

  ${media.lessThan('md')`
    width: 300px;
  `}
`;
