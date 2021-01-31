import React from 'react';
import { Markup } from 'interweave';

import './style.scss';

function BlogCard({ title, desc, link, pubDate, categories }) {
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
    </div>
  );
}

export default BlogCard;
