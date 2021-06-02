import styled from 'styled-components';

export const ModalContent = styled.div`
  max-width: 500px;
  min-width: 320px;
  max-height: 80vh;
  overflow: auto;
  background-color: white;
  z-index: 25;
  padding: 0;
  padding-bottom: 20px;
  border: 1px solid maroon;
  position: relative;
  margin: auto;

  button {
    z-index: 2;
    color: red;
  }

  img {
    width: 100%;
    max-height: 400px;
    margin: 0;
  }

  > h2 {
    text-align: center;
  }
  > hr {
    width: 200px;
    border: 2px solid grey;
  }
`;

export const Description = styled.div`
  padding: 10px;
  color: black;
  text-align: center;

  > .techStack {
    font-size: 18px;
    color: maroon;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
  }

  > p {
    margin-top: 20px;
  }
  > hr {
    width: 80%;
  }
`;
