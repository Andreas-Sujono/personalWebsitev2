import styled from 'styled-components';

export const AdsCard = styled.div`
  background-color: white;
  max-width: 400px;
  height: 420px;
  border-radius: 8px;
  position: relative;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
  z-index: 21;
  padding: 0 0 24px 0;
  > h1 {
    font-size: 28px;
    text-align: center;
    color: rgb(227, 27, 109);
    margin-top: 10px;
    font-weight: bold;
  }

  > img {
    width: 100%;
    height: 75%;
    object-fit: cover;
  }

  > .description {
    text-align: center;
    max-width: 80%;
    margin: auto;
    margin-top: 0px;
    font-weight: 500;
    line-height: 1.2em;
  }

  svg {
    vertical-align: baseline;
  }

  @media Screen and (max-width: 650px) {
    > img {
      height: 50%;
    }
  }
`;
