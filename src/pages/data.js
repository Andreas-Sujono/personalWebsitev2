// import { lazy } from 'react';
import Homepage from 'pages/Homepage';
import Blog from 'pages/Blog';

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
    path: '/blog/project/:project-id',
    exact: false,
    component: Blog,
  },
];

export default routeList;
