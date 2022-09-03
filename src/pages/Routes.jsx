import React, { memo, Suspense } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { FullPageLoadingBar } from 'react-dre/lib/LoadingBar';
import styled from 'styled-components';
import media from 'media';
import logo from 'assets/Logo.png';
import routes from './data';

export const AndreasLogo = styled.img`
  position: fixed;
  top: 10px;
  left: 8%;
  z-index: 20;
  width: 50px;
  cursor: pointer;

  ${media.lessThan('md')`
    left: 4%;
  `}
`;

function NavRoutes() {
  const navigate = useNavigate();
  return (
    <>
      <AndreasLogo
        src={logo}
        alt="andreas Logo"
        onClick={() => navigate('/')}
      />
      <Suspense fallback={<FullPageLoadingBar />}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              element={route.component}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default memo(NavRoutes);
