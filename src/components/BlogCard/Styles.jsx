import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 24px;
  width: 100%;
  max-width: 500px;
  border: 1px dashed lightgrey;
  padding-bottom: 18px;
  overflow: hidden;
`;

export const CardBody = styled.div`
  padding: 1em;
  .card-title {
    font-weight: 600;
  }
  .pub-date {
    margin-top: 12px;
    font-style: italic;
  }
  .categories {
    margin-top: 12px;
    margin-bottom: 12px;
    > span {
      margin-right: 12px;
      padding: 8px;
      margin-bottom: 6px;
    }
  }

  img {
    width: 100%;
  }
`;

export const GhCode = styled.div`
  padding: 0 24px;
  margin-bottom: 12px;
  strong {
    display: inline-block;
  }
`;
