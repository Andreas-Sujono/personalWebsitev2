import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoadingBar from 'components/shared/LoadingBar';
import routes from './data';

const Routes = () => {
  return (
    <Suspense fallback={<LoadingBar isFullPage />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route
            key={`${route.path}_${idx}`}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Routes;
