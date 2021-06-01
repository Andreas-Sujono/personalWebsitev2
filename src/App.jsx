import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './pages/Routes';
import './App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes />
    </HashRouter>
  );
}

export default App;
