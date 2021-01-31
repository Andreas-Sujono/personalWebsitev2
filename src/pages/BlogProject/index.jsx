import React from 'react';
import queryString from 'query-string';
import styled from 'styled-components';
import ReactExample1 from './ReactExample1';

const StyledContainer = styled.div`
  background-color: #05a1a7;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
  font-weight: bold;
`;

function BlogProject(props) {
  const { articleName } = queryString.parse(props.location.search);
  console.log('articleName: ', articleName);
  const mapProject = {
    'Mastering React ~ Best Practices 2021 (Part 1/3)': <ReactExample1 />,
  };

  if (mapProject[articleName]) return mapProject[articleName];

  return <StyledContainer>Project Not found</StyledContainer>;
}

export default BlogProject;
