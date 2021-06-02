import React, { memo, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FullPageLoadingBar } from 'react-dre/lib/LoadingBar';
import routes from './data';

const Routes = () => {
  return (
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
  );
};

export default memo(Routes);
