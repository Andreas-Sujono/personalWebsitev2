import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';
import { Card, CardBody, GhCode } from './Styles';

function BlogCard({ title, desc, link, pubDate, categories, githubCode }) {
  const badgeString = [
    'secondary',
    'success',
    'secondary',
    'danger',
    'primary',
    'warning',
    'info',
    'light',
    'primary',
  ];
  const getRandomBadge = () => {
    const id = Math.floor(Math.random() * badgeString.length);
    return badgeString[id];
  };

  const parsedDesc = desc.length > 500 ? desc.slice(0, 500) : desc;
  return (
    <Card>
      <CardBody>
        <h5 className="card-title">{title}</h5>
        <div className="pub-date">{pubDate}</div>
        <div className="categories">
          {categories.map((item) => (
            <span className={`badge badge-${getRandomBadge()}`} key={item}>
              {item}
            </span>
          ))}
        </div>
        <p className="card-text">
          <Markup content={parsedDesc} />
        </p>
        <a href={link} className="btn btn-dark" target="__blank">
          See more
        </a>
      </CardBody>

      {githubCode && (
        <GhCode>
          <hr />
          <strong>Github Code:</strong>&nbsp;
          <a href={githubCode} target="__blank">
            {githubCode}
          </a>
        </GhCode>
      )}
      {githubCode && (
        <GhCode>
          <strong>Github demo:</strong>&nbsp;
          <Link to={`/blog/project?articleName=${title}`}>here</Link>
        </GhCode>
      )}
    </Card>
  );
}

export default memo(BlogCard);
