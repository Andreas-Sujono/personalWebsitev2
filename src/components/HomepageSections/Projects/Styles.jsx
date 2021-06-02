import styled from 'styled-components';
import media from 'media';

export const Container = styled.div`
  background-color: rgb(238, 237, 237);

  min-height: 500px;
  padding: 50px 0 100px 0;

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
  .content {
    width: 80%;
    margin: auto;
  }
  .projects-row {
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  }

  ${media.lessThan('md')`
    >h2{
      font-size: 32px;
    }
    > hr{
      margin-bottom: 40px;
    }
  `}
`;
