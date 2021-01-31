import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const LoadingWrapper = styled.div`
  width: ${(props) => (props.isFullPage ? '100vw' : '100%')};
  height: ${(props) => (props.isFullPage ? '100vh' : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isFullPage ? 'rgb(37,42,53)' : 'none')};
`;

function LoadingBar({
  type = 'spinningBubbles',
  color = '#e31b6d',
  width = 100,
  height = 100,
  isFullPage = false,
}) {
  return (
    <LoadingWrapper isFullPage={isFullPage}>
      <ReactLoading type={type} color={color} width={width} height={height} />
    </LoadingWrapper>
  );
}

export default LoadingBar;
