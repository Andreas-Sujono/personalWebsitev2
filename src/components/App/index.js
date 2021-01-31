import React from 'react';

import FirstPage from 'components/FirstPage';
import TopNav from 'components/TopNav';
import About from 'components/About';
import Footer from 'components/Footer';
import Projects from 'components/Projects';
import Gallery from 'components/Gallery';
import MiddleContent from 'components/MiddleContent';
import Certification from 'components/Certification';

import './medResponsive.scss';

const App = () => {
  return (
    <div className="app">
      <FirstPage />
      <TopNav />
      <About />
      <Projects />
      <MiddleContent />
      <Certification />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
