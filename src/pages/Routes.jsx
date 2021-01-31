import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// import LoadingBar from 'components/shared/LoadingBar';
import routes from './data';

const Routes = () => {
  return (
    <Switch>
      {/* <Suspense fallback={<LoadingBar isFullPage />}> */}
      {routes.map((route, idx) => (
        <Route
          key={`${route.path}_${idx}`}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      {/* </Suspense> */}
    </Switch>
  );
};

export default Routes;
