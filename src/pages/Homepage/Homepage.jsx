import React, { useState } from 'react';

import FirstPage from 'components/FirstPage';
import TopNav from 'components/TopNav';
import About from 'components/About';
import Footer from 'components/Footer';
import Projects from 'components/Projects';
import Gallery from 'components/Gallery';
import MiddleContent from 'components/MiddleContent';
import Certification from 'components/Certification';
import { AdsModal } from 'components/Ads';
import blogAdsImage from 'assets/blog/blog-ads.png';
import './medResponsive.scss';

// id need to be updated for every new ads
const adsContent = [
  {
    id: 1,
    title: 'Check out my Blog',
    image: blogAdsImage,
    desc: 'Check out my new post!, I will post a new article every week',
    link: '/blog',
  },
];

function Homepage() {
  const [isAdsOpen, setIsAdsOpen] = useState(true);

  return (
    <div className="homepage">
      <FirstPage />
      <TopNav />
      <About />
      <Projects />
      <MiddleContent />
      <Certification />
      <Gallery />
      <Footer />
      {/* {adsContent.length &&
        adsContent.map((item) => (
          <AdsModal
            key={item.id}
            isOpen={isAdsOpen}
            handleClose={() => setIsAdsOpen(false)}
            title={item.title}
            image={item.image}
            desc={item.desc}
            link={item.link}
            id={item.id}
          />
        ))} */}
    </div>
  );
}

export default Homepage;
