import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactGA from 'react-ga';
import App from './App';

ReactGA.initialize('G-1DNZP0ZK9X');

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
