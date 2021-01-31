import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const LoadingWrapper = styled.div`
  width: ${(props) => (props.isFullPage ? '100vw' : '100%')};
  height: ${(props) => (props.isFullPage ? '100vh' : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoadingBar({
  type = 'spinningBubbles',
  color = '#e31b6d',
  width = 50,
  height = 50,
  isFullPage = false,
}) {
  return (
    <LoadingWrapper isFullPage={isFullPage}>
      <ReactLoading type={type} color={color} width={width} height={height} />
    </LoadingWrapper>
  );
}

export default LoadingBar;
