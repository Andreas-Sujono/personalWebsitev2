import { lazy } from 'react';

const routeList = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('src/pages/Homepage')),
  },
  {
    path: '/blog',
    exact: true,
    component: lazy(() =>
      import('admin_desktop/components/LandingPage/AboutUs'),
    ),
  },
  {
    path: '/blog/project/:project-id',
    component: lazy(() =>
      import('admin_desktop/components/LandingPage/AboutUs'),
    ),
  },
];

export default routeList;
