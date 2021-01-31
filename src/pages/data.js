// import { lazy } from 'react';
import Homepage from 'pages/Homepage';
import Blog from 'pages/Blog';
import BlogProject from 'pages/BlogProject';

const routeList = [
  {
    path: '/',
    exact: true,
    component: Homepage,
  },
  {
    path: '/blog',
    exact: true,
    component: Blog,
  },
  {
    path: '/blog/project',
    exact: true,
    component: BlogProject,
  },
];

export default routeList;
