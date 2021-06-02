import styled from 'styled-components';
import media from 'media';

export const Container = styled.div`
  padding: 50px 20px;
  width: 80%;
  margin: auto;
  min-height: 730px;

  > h2 {
    margin-top: 30px;
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  > hr {
    width: 200px;
    border: 2px double grey;
    margin-bottom: 80px;
  }

  .certificate-image {
    width: 100%;
    max-width: 700px !important;
    max-height: 450px;
    display: block;
    margin: auto;
  }

  i {
    color: black;
  }

  ${media.lessThan('md')`
  min-height: 340px;
  width: 100%;

    >h2{
      font-size: 32px;
    }
    > hr{
      margin-bottom: 40px;
    }
  `}
`;
