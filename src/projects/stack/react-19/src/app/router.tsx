import { createBrowserRouter, type RouteObject } from 'react-router';
import Home from '@pages/home';
import Main from '@pages/main';

const routes = [
  {
    element: <Main.Layout />,
    children: [
      {
        path: '/',
        element: <Home.Page />,
      },
    ],
  },
] satisfies RouteObject[];

export const router = createBrowserRouter(routes);
