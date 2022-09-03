import Loadable from 'react-loadable';
import React from 'react';

const Homepage = Loadable({
  loader: () => import('pages/Homepage'),
  loading: () => null,
});

const Blog = Loadable({
  loader: () => import('pages/Blog'),
  loading: () => null,
});

const BlogProject = Loadable({
  loader: () => import('pages/BlogProject'),
  loading: () => null,
});

const routeList = [
  {
    path: '/',
    exact: true,
    component: <Homepage />,
  },
  {
    path: '/blog',
    exact: true,
    component: <Blog />,
  },
  {
    path: '/blog/project',
    exact: true,
    component: <BlogProject />,
  },
];

export default routeList;
