import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import TopNav from 'components/TopNav';
import BlogCard from 'components/BlogCard';
import LoadingBar from 'react-dre/lib/LoadingBar';
import Footer from 'components/Footer';
import { Container, BlogHeader } from './Styles';

const mapArticle = {
  'Mastering React ~ Best Practices 2021 (Part 1/3)': {
    githubCode:
      'https://github.com/Andreas-Sujono/personalWebsitev2/tree/master/src/pages/BlogProject/ReactExample1',
  },
};

function Blog() {
  // const [mediumMeta, setMediumMeta] = useState({});
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMediumData();
  }, []);

  const getMediumData = async () => {
    const url =
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@andreassujono';

    const feedReq = await axios.get(url);
    if (feedReq.status !== 200) return;

    const feed = feedReq.data;
    const parsedItems = feed.items.map((item) => {
      const { title } = item;
      if (mapArticle[title]) return { ...item, ...mapArticle[title] };
      return item;
    });

    // setMediumMeta(feed);
    setArticles(parsedItems);
    setIsLoading(false);
  };

  return (
    <Container>
      <TopNav />
      <BlogHeader>
        <a href="https://andreassujono.medium.com/" target="__blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/1200px-Medium_logo_Monogram.svg.png"
            className="medium-logo"
            alt="medium"
          />
          <p> Click here in case the blogs do not show up</p>
        </a>
      </BlogHeader>

      <div className="blog-content row">
        {isLoading && (
          <LoadingBar type="spinningBubbles" color="#e31b6d" width={100} />
        )}
        {!isLoading &&
          articles.map((item) => (
            <div className="col-lg-4 col-md-6 col-12" key={item.title}>
              <BlogCard
                title={item.title}
                image=""
                desc={item.content || item['content:encoded']}
                link={item.link}
                pubDate={item.pubDate.slice(0, 16)}
                categories={item.categories}
                githubCode={item.githubCode}
              />
            </div>
          ))}
      </div>

      <Footer />
    </Container>
  );
}

export default memo(Blog);
