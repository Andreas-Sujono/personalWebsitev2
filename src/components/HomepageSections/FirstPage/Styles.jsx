import styled from 'styled-components';
import media from 'media';

export const Container = styled.div`
  background-color: rgb(37, 41, 52);
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  z-index: 10;

  > .title-container {
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    z-index: 10;
    h1 {
      font-size: 40px;
    }
    h1 > span {
      color: rgb(227, 27, 109);
      font-weight: bold;
    }
    h2 {
      font-size: 32px;
    }
  }

  .download-resume {
    border: 2px solid lightgrey;
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 20px;
    z-index: 10;
    transition: all 0.5s;
    cursor: pointer;
    a {
      color: white;
    }
    > a:hover {
      text-decoration: none;
    }
  }
  .download-resume:hover {
    background-color: rgb(5, 161, 167);
    border: 2px solid rgb(37, 41, 52);
  }

  ${media.lessThan('md')`
    > .title-container {
      h1 {
        font-size: 28px;
      }
      h2 {
        font-size: 22px;
      }
    }
  `}
`;

export const CoolBackground = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;

  > * {
    width: 100%;
    height: 100%;
  }
`;
