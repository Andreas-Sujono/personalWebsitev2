import styled from 'styled-components';
import media from 'media';

export const Container = styled.div`
  width: 100%;
  margin-top: 150px;
  color: white;
  background-color: rgb(37, 41, 52);
  position: relative;

  img.divider {
    width: 100%;
    height: 100px;
    position: absolute;
    top: -100px;
  }
`;

export const BottomFooter = styled.div`
  background-color: rgba(54, 58, 70, 0.9);
  padding-top: 14px;
  height: 50px;
  text-align: center;

  i {
    color: red;
  }
`;

export const Row = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  padding-bottom: 40px;

  ${media.lessThan('md')`
    flex-direction: column;
  `}
`;

export const Section = styled.div`
  margin: auto;
  margin-top: 0;
  width: 40%;

  h2 {
    font-family: 'Courier New', Courier, monospace;
    font-size: 22px;
  }

  ul li {
    list-style-type: square;
    font-size: 16px;
    a {
      transition: all 0.2s;
      color: snow;
      &:hover {
        color: rgb(227, 27, 109);
        text-decoration: none;
      }
    }
  }

  ${media.lessThan('md')`
    width: 100%;
  `}
`;

export const FirstSection = styled(Section)`
  position: relative;
  width: 20%;
  img {
    width: 100px;
    position: absolute;
    right: 60px;
  }

  ${media.lessThan('md')`
    width: 100%;
    img{
      right: 40px;
      width: 60px;
    }
  `}
`;

export const SecondSection = styled(Section)``;

export const ThirdSection = styled(Section)`
  min-width: 300px;

  input {
    width: 60%;
  }

  textarea {
    width: 60%;
    height: 100px;
  }

  .statusMessage {
    width: 70%;
    padding: 6px;
    margin-top: 10px;
    border-radius: 10px;
    text-align: center;
  }

  ${media.lessThan('md')`
    
  input {
    width: 100%;
  }

  textarea {
    width: 100%;
    height: 100px;
  }
  `}
`;
