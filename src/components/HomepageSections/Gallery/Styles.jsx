import styled from 'styled-components';
import media from 'media';

export const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  min-height: 500px;
  padding: 50px 0;
  margin: auto;

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
    width: 70%;
    margin: auto;
  }

  ${media.lessThan('md')`
    >h2{
      font-size: 32px;
    }
    > hr{
      margin-bottom: 40px;
    }
    .content{
       width: 90%;
    }
  `}
`;

export const GalleryRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  .galleryColumn {
    flex: 33%;
    padding: 0 4px;
    max-width: 33%;
  }
`;
