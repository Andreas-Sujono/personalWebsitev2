import { lazy } from 'react';

const routeList = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('pages/Homepage')),
  },
  {
    path: '/blog',
    exact: true,
    component: lazy(() => import('pages/Blog')),
  },
  {
    path: '/blog/project',
    exact: true,
    component: lazy(() => import('pages/BlogProject')),
  },
];

export default routeList;
