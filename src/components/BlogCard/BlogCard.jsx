import React from 'react';
import { Link } from 'react-router-dom';
import { Markup } from 'interweave';

import './style.scss';

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
    <div className="card blog-card">
      <div className="card-body">
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
      </div>

      {githubCode && (
        <div className="gh-code">
          <hr />
          <strong>Github Code:</strong>&nbsp;
          <a href={githubCode} target="__blank">
            {githubCode}
          </a>
        </div>
      )}
      {githubCode && (
        <div className="gh-code">
          <strong>Github demo:</strong>&nbsp;
          <Link to={`/blog/project?articleName=${title}`}>here</Link>
        </div>
      )}
    </div>
  );
}

export default BlogCard;
