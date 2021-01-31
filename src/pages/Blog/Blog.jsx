import React, { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import TopNav from 'components/TopNav';
import BlogCard from 'components/BlogCard';
import './style.scss';

const parser = new Parser({});

function Blog() {
  const [mediumMeta, setMediumMeta] = useState({});
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getMediumData();
  }, []);

  const getMediumData = async () => {
    const url = 'https://medium.com/feed/@andreassujono';
    const feed = await parser.parseURL(url);
    console.log(feed);

    setMediumMeta(feed);
    setArticles(feed.items);
  };

  return (
    <div className="blog-page">
      <TopNav />
      <div className="blog-header" />
      <div className="blog-content row">
        {articles.map((item) => (
          <div className="col-lg-4 col-md-6 col-12" key={item.title}>
            <BlogCard
              title={item.title}
              image=""
              desc={item.content || item['content:encoded']}
              link={item.link}
              pubDate={item.pubDate.slice(0, 17)}
              categories={item.categories}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
