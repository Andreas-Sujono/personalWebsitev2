import styled from 'styled-components';

export const Container = styled.div`
  .blog-content {
    width: 80%;
    margin: auto;
    padding-top: 12px;
    min-height: calc(100vh - 600px);
  }

  .dre-loading-bar {
    width: 100%;
  }

  @media screen and (max-width: 650px) {
    .blog-content {
      width: 90%;
      padding-top: 0;
    }
  }
`;

export const BlogHeader = styled.div`
  width: 100%;
  margin: auto;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin-top: 24px;

  a:hover {
    text-decoration: none;
  }

  img.medium-logo {
    display: block;
    margin: auto;
    width: 30px;
  }

  p {
    text-align: center;
    margin-top: 12px;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    h1 {
      font-size: 18px;
      margin-top: 12px;
    }
  }
`;
