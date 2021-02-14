import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import TopNav from 'components/TopNav';
import BlogCard from 'components/BlogCard';
import LoadingBar from 'components/shared/LoadingBar';
import logo from 'assets/Logo.png';
import Footer from 'components/Footer';
import './style.scss';

const parser = new Parser({});

const mapArticle = {
  'Mastering React ~ Best Practices 2021 (Part 1/3)': {
    githubCode:
      'https://github.com/Andreas-Sujono/personalWebsitev2/tree/master/src/pages/BlogProject/ReactExample1',
  },
};

function Blog() {
  const [mediumMeta, setMediumMeta] = useState({});
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMediumData();
  }, []);

  const getMediumData = async () => {
    const url =
      'https://api-andreassujono.herokuapp.com//https://medium.com/feed/@andreassujono';
    const feed = await parser.parseURL(url);
    console.log(feed);

    const parsedItems = feed.items.map((item) => {
      const { title } = item;
      if (mapArticle[title]) return { ...item, ...mapArticle[title] };
      return item;
    });

    setMediumMeta(feed);
    setArticles(parsedItems);
    setIsLoading(false);
  };

  return (
    <div className="blog-page">
      <img className="logo" src={logo} alt="andreas Logo" />

      <TopNav />
      <a href={mediumMeta.link} target="__blank">
        <div className="blog-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/1200px-Medium_logo_Monogram.svg.png"
            className="medium-logo"
            alt="medium"
          />
          <h1>{mediumMeta.description}</h1>
        </div>
      </a>
      <div className="blog-content row">
        {isLoading && <LoadingBar />}
        {articles.map((item) => (
          <div className="col-lg-4 col-md-6 col-12" key={item.title}>
            <BlogCard
              title={item.title}
              image=""
              desc={item.content || item['content:encoded']}
              link={item.link}
              pubDate={item.pubDate.slice(0, 17)}
              categories={item.categories}
              githubCode={item.githubCode}
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Blog;
