import React from 'react';
import { Switch, HashRouter } from 'react-router-dom';
import Routes from './pages/Routes';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Routes />
      </Switch>
    </HashRouter>
  );
}

export default App;
