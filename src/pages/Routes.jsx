import React, { memo, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
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

  ${media.lessThan('md')`
    left: 4%;
  `}
`;

const Routes = () => {
  return (
    <>
      <AndreasLogo src={logo} alt="andreas Logo" />
      <Switch>
        <Suspense fallback={<FullPageLoadingBar />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Suspense>
      </Switch>
    </>
  );
};

export default memo(Routes);
